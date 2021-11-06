<!-- taken from https://loading.io/css/ -->
<div
	style="
				display: flex;
				position: absolute;
				align-items: center;
				justify-content: center;
				"
>
	<div class="lds-ring">
		<div />
		<div />
		<div />
		<div />
	</div>
</div>

<style>
	.lds-ring {
		display: flex;
		position: relative;
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
</style>
