<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import customFetch from '$lib/customFetch';
	import Icon from '$lib/Icon.svelte';

	function toggleLight() {
		customFetch(`/api/lamp/${$page.params.lamp}/toggle-light`);
	}

	import { goto } from '$app/navigation';
	import OptionWrapper from '$lib/OptionWrapper.svelte';
</script>

<svelte:head>
	<title>Lamp Controller</title>
</svelte:head>

<!-- check for inspiration n.6 https://1stwebdesigner.com/free-code-snippets-css-buttons/ -->

<OptionWrapper>
	<span class="title">{$page.params.lamp} lamp</span>
	<button on:click={toggleLight} transition:fade>Toggle Light</button>
	<button on:click={toggleLight} transition:fade>Toggle Light</button>
	<button on:click={toggleLight} transition:fade>Toggle Light</button>
	<Icon name="back" focusable class="icon" on:click={() => goto('/')} />
</OptionWrapper>

<style>
</style>
