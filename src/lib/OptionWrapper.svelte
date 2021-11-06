<script>
	import { browser } from '$app/env';
	import Icon from './Icon.svelte';

	export let title = '';
	export let onBack = null;
	const isBigScreen = browser && window.matchMedia('(min-width: 500px)');
</script>

<div class="wrapper">
	<span class="title">{title}</span>
	<slot />
	{#if onBack}
		<Icon
			name="back"
			focusable
			class="icon"
			on:click={onBack}
			size={isBigScreen.matches ? 'medium' : 'small'}
		/>
	{/if}
</div>

<style>
	.wrapper {
		font-family: 'Just Another Hand', cursive;
		display: grid;
		padding: 3rem 2rem;
		border: 3px solid #333333;
		border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
		background: #ffffff;
		position: relative;
		font-size: 1.2rem;
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
		padding: 0.5rem;
		background: white;
		background: transparent;
	}
	:global(.wrapper > .icon) {
		position: absolute;
		bottom: 0;
		padding: 0.5rem;
	}
	:global(.wrapper > .icon):hover {
		transform: scale(1.2);
		transition: all;
		cursor: pointer;
	}
	:global(.wrapper a) {
		display: block;
		letter-spacing: 0.3ch;
		text-transform: uppercase;
		padding: 0.5rem 1rem;
		cursor: pointer;
		color: #000;
		border: none;
		background: white;
		text-decoration: none;
	}
	@media screen and (min-width: 500px) {
		.wrapper {
			padding: 4rem 8rem;
			font-size: 1.8rem;
		}
		.title {
			padding: 1rem;
			font-size: 2rem;
		}
		:global(.wrapper > .icon) {
			padding: 1rem;
		}
	}
</style>
