<script lang="ts">
	export let hasAbsolutePosition = true;
	export let align: 'right' | 'center' = 'center';
	export let size: 'normal' | 'small' = 'normal';
</script>

<!-- taken from https://loading.io/css/ -->
<div
	class="lds-ring"
	style="position: {hasAbsolutePosition ? 'absolute' : 'relative'};"
	class:center-align={align === 'center'}
	class:right-align={align === 'right'}
	class:small={size === 'small'}
>
	<div />
	<div />
	<div />
	<div />
</div>

<style>
	.lds-ring {
		transform-origin: center;
		width: 30px;
		height: 30px;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 30px;
		height: 30px;
		margin: 0px;
		border: 3px solid #000;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #000 transparent transparent transparent;
	}
	.small div {
		width: 25px;
		height: 25px;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.right-align {
		right: 15%;
		transform: translate(-100%, 0%);
	}
	.center-align {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
