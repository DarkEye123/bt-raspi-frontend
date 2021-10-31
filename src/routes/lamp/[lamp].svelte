<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import customFetch from '$lib/customFetch';

	function toggleLight() {
		customFetch(`/api/lamp/${$page.params.lamp}/toggle-light`);
	}
</script>

<svelte:head>
	<title>Lamp Controller</title>
</svelte:head>

<!-- check for inspiration n.6 https://1stwebdesigner.com/free-code-snippets-css-buttons/ -->

<button on:click={toggleLight} transition:fade>Toggle Light</button>
