<script lang="ts">
	interface Lamp {
		state: boolean;
		sensor_blocker: boolean;
		motion: boolean;
		sound: boolean;
	}

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	import OptionWrapper from '$lib/OptionWrapper.svelte';
	import ErrorComponent from '$lib/Error.svelte';
	import Switch from '$lib/Switch.svelte';
	import customFetch from '$lib/customFetch';
	import LoadingSpinner from '$lib/LoadingSpinner.svelte';

	const isBigScreen = browser && window.matchMedia('(min-width: 500px)');
	const switchSize = isBigScreen.matches ? 'medium' : 'small';

	let lampData: Lamp = null;

	let loadingMap: Lamp = { state: false, sensor_blocker: false, motion: false, sound: false };

	async function toggleLight(id) {
		loadingMap.state = true;
		await customFetch(`/api/lamp/${$page.params.lamp}/toggle-light`);
		lampData.state = !lampData.state;
		loadingMap.state = false;
	}

	async function toggleAllSensors(currentValue) {
		loadingMap.sensor_blocker = true;
		await customFetch(
			`/api/lamp/${$page.params.lamp}/${currentValue ? 'disable' : 'enable'}-all-sensors`
		);
		loadingMap.sensor_blocker = false;
	}

	async function toggleSensor(sensorName, currentValue) {
		loadingMap[sensorName] = true;
		await customFetch(
			`/api/lamp/${$page.params.lamp}/${currentValue ? 'disable' : 'enable'}-${sensorName}-sensor`
		);
		loadingMap[sensorName] = false;
	}

	async function synchronize() {
		lampData = await customFetch<Lamp>(`/api/lamp/${$page.params.lamp}/synchronize`);
	}
</script>

<svelte:head>
	<title>Lamp Controller</title>
</svelte:head>

{#await synchronize()}
	<p>Loading</p>
{:then}
	<OptionWrapper title="{$page.params.lamp} lamp" onBack={() => goto('/')}>
		<div class="grid">
			<span class="left-col">
				Lamp Light:
				<span class="value" class:value__positive={lampData.state}>&nbsp;{lampData.state}</span>
			</span>
			<div style="position: relative;">
				<button on:click={toggleLight} style="visibility: {loadingMap.state && 'hidden' || "visible"};"
				>➔ Toggle Light</button
				>
				<!-- {#if loadingMap.state} -->
					<LoadingSpinner />
				<!-- {/if} -->
			</div>
			<hr />
			<hr />

			<span class="left-col">
				Ignore All Sensors:
				<span class="value" class:value__positive={lampData.sensor_blocker}
					>&nbsp;{lampData.sensor_blocker}</span
				>
			</span>
			<div style="display: flex; width: 100%; justify-content: center;">
				<Switch
					on:change={() => {
						toggleAllSensors(lampData.sensor_blocker);
					}}
					bind:checked={lampData.sensor_blocker}
					size={switchSize}
				/>
			</div>

			<span class="left-col" class:disabled={lampData.sensor_blocker}>
				Motion Sensor:
				<span class="value" class:value__positive={lampData.motion}>&nbsp;{lampData.motion}</span>
			</span>
			<div style="display: flex; width: 100%; justify-content: center;">
				<Switch
					on:change={() => {
						toggleSensor('motion', lampData.motion);
					}}
					bind:checked={lampData.motion}
					disabled={lampData.sensor_blocker}
					size={switchSize}
				/>
			</div>

			<span class="left-col" class:disabled={lampData.sensor_blocker}>
				Sound Sensor:
				<span class="value" class:value__positive={lampData.sound}>&nbsp;{lampData.sound}</span>
			</span>
			<div style="display: flex; width: 100%; justify-content: center;">
				<Switch
					on:change={() => {
						toggleSensor('sound', lampData.sound);
					}}
					bind:checked={lampData.sound}
					disabled={lampData.sensor_blocker}
					size={switchSize}
				/>
			</div>
		</div>
	</OptionWrapper>
{:catch e}
	<ErrorComponent title="Can't synchronize" on:click={() => goto('/')}>{e.message}</ErrorComponent>
{/await}

<style>
	.disabled {
		background-color: lightgray;
		text-decoration: line-through;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 0.8rem;
	}
	.left-col {
		display: flex;
		align-items: center;
	}
	.value {
		color: lightcoral;
	}
	hr {
		width: 100%;
	}
	.value__positive {
		color: lightgreen;
	}
	@media screen and (min-width: 500px) {
		.grid {
			row-gap: 1rem;
		}
	}
</style>
