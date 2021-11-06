<script>
	import LoadingSpinner from './LoadingSpinner.svelte';

	export let loading;
</script>

<button on:click>
	<div>
		<div>
			<slot />
		</div>
		{#if loading}
			<LoadingSpinner />
		{/if}
	</div>
</button>

<style>
	div {
		position: relative;
	}
	button {
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
	button:hover {
		color: #333333;
		background: lightgrey;
	}
	button:active {
		color: white;
		background: black;
	}
</style>
