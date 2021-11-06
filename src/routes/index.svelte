<script>
	import customFetch from '$lib/customFetch';
	import OptionWrapper from '$lib/OptionWrapper.svelte';
	import Button from '$lib/Button.svelte';

	const lamps = ['bedroom', 'proto', 'mock'];

	let loading = false;
	async function handleResetRequest() {
		loading = true;
		await customFetch('/api/reconnect-all');
		loading = false;
	}
</script>

<svelte:head>
	<title>Lamp Controller Index</title>
</svelte:head>

<!-- check for inspiration n.6 https://1stwebdesigner.com/free-code-snippets-css-buttons/ -->

<OptionWrapper title="Choose a lamp">
	<ul>
		{#each lamps as lamp}
			<li>
				<a sveltekit:prefetch href="/lamp/{lamp}">{lamp}</a>
			</li>
		{/each}
	</ul>
	<Button on:click={handleResetRequest} {loading}>&#9760; Reset Lamp States &#9760;</Button>
</OptionWrapper>

<style>
	li:hover {
		list-style-type: disclosure-closed;
	}
</style>
