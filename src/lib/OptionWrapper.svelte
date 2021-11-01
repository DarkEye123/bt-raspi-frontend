<script>
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	export let title = '';
	export let onBack = null;
</script>

<div class="wrapper" transition:fade>
	<span class="title">{title}</span>
	<slot />
	{#if onBack}
		<Icon name="back" focusable class="icon" on:click={onBack} />
	{/if}
</div>

<style>
	.wrapper {
		font-family: 'Just Another Hand', cursive;
		display: grid;
		padding: 4rem 8rem;
		border: 3px solid #333333;
		font-size: 1.2rem;
		border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
		background: #ffffff;
		position: relative;
	}
	.wrapper::before {
		pointer-events: none;
		content: '';
		border: 2px solid #353535;
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
		border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
	}
	.title {
		position: absolute;
		padding: 1rem;
		background: white;
		font-size: 2rem;
	}
	:global(.wrapper > .icon) {
		position: absolute;
		bottom: 0;
		padding: 1rem;
	}
	:global(.wrapper > .icon):hover {
		transform: scale(1.5);
		transition: all;
		cursor: pointer;
	}
	:global(.wrapper button),
	:global(.wrapper a) {
		display: block;
		letter-spacing: 0.3ch;
		text-transform: uppercase;
		padding: 1rem 2rem;
		cursor: pointer;
		color: #000;
		border: none;
		background: white;
		text-decoration: none;
	}
	:global(.wrapper button:hover) {
		color: #333333;
		background: lightgrey;
	}
	:global(.wrapper button:active) {
		color: white;
		background: black;
	}
</style>
