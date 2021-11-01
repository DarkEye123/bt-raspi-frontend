<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import OptionWrapper from '$lib/OptionWrapper.svelte';
	import ErrorComponent from '$lib/Error.svelte';
	import Switch from '$lib/Switch.svelte';
	import customFetch from '$lib/customFetch';

	const isBigScreen = typeof window !== 'undefined' && window.matchMedia('(min-width: 500px)');
	const switchSize = isBigScreen.matches ? 'medium' : 'small';

	let lampData = null;

	function toggleLight() {
		customFetch(`/api/lamp/${$page.params.lamp}/toggle-light`);
	}

	function toggleAllSensors(currentValue) {
		customFetch(
			`/api/lamp/${$page.params.lamp}/${currentValue ? 'disable' : 'enable'}-all-sensors`
		);
	}

	function toggleSensor(sensorName, currentValue) {
		customFetch(
			`/api/lamp/${$page.params.lamp}/${currentValue ? 'disable' : 'enable'}-${sensorName}-sensor`
		);
	}

	async function synchronize() {
		let data = await customFetch(`/api/lamp/${$page.params.lamp}/synchronize`);
		if (!data.ok) {
			throw new Error(data.statusText);
		}
		lampData = await data.json();
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
			<button on:click={toggleLight}>➔ Toggle Light</button>
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
