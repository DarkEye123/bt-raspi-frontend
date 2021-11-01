<script>
	import OptionWrapper from '$lib/OptionWrapper.svelte';

	const lamps = ['bedroom', 'proto', 'mock'];
</script>

<svelte:head>
	<title>Lamp Controller Index</title>
</svelte:head>

<!-- check for inspiration n.6 https://1stwebdesigner.com/free-code-snippets-css-buttons/ -->

<!-- <OptionWrapper transition:fade> -->
<OptionWrapper title="Choose a lamp">
	<ul>
		{#each lamps as lamp}
			<li>
				<a sveltekit:prefetch href="/lamp/{lamp}">{lamp}</a>
			</li>
		{/each}
	</ul>
</OptionWrapper>

<style>
	li:hover {
		list-style-type: disclosure-closed;
	}
</style>
