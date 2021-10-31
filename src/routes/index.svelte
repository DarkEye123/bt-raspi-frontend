<script>
	import { fade } from 'svelte/transition';

	const lamps = ['bedroom', 'proto', 'mock'];
</script>

<svelte:head>
	<title>Lamp Controller Index</title>
</svelte:head>

<!-- check for inspiration n.6 https://1stwebdesigner.com/free-code-snippets-css-buttons/ -->

<div transition:fade>
	{#each lamps as lamp}
		<a sveltekit:prefetch href="/lamp/{lamp}">{lamp}</a>
	{/each}
</div>

<style>
	div {
		display: grid;
		row-gap: 1rem;
		text-align: center;
	}
</style>
