<script>
	import { fade } from 'svelte/transition';
</script>

<div class="wrapper" transition:fade>
	<slot />
</div>

<style>
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
	:global(.title) {
		position: absolute;
		padding: 1rem;
		background: white;
		font-size: 2rem;
	}
	.wrapper {
		font-family: 'Just Another Hand', cursive;
		display: grid;
		padding: 4rem 8rem;
		border: 3px solid #333333;
		font-size: 1rem;
		border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
		background: #ffffff;
		position: relative;
	}
	:global(.wrapper > a) {
		letter-spacing: 0.3ch;
		text-transform: uppercase;
		padding: 1em 5em;
	}
	:global(button) {
		letter-spacing: 0.3ch;
		text-transform: uppercase;
		--x: 50%;
		--y: 50%;

		position: relative;
		appearance: none;
		padding: 1em 5em;
		cursor: pointer;
		outline: none;
		border-radius: 100px;

		color: #000;
		border: 2px solid transparent;
		background: linear-gradient(#fff, #fff) padding-box,
			radial-gradient(farthest-corner at var(--x) var(--y), #00c9a7, #845ec2) border-box;
	}
	:global(button:active) {
		color: white;
		background: linear-gradient(#000, #000) padding-box,
			radial-gradient(farthest-corner at var(--x) var(--y), #00c9a7, #845ec2) border-box;
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
</style>
