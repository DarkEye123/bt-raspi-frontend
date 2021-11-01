<script>
	export let title = 'Unknown Error';
</script>

<div>
	<button on:click>×</button>
	<h2>{title}</h2>
	<p><slot /></p>
</div>

<style>
	div {
		background-color: lightcoral;
		position: absolute;
		bottom: 0;
		min-width: 350px;
		width: 100%;
		min-height: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		font-weight: bold;
	}
	P {
		margin-top: 0;
	}
	button {
		position: absolute;
		right: 0;
	}
</style>
