<script lang="ts">
	export let checked = false;
	export let disabled = false;
	const sizes = {
		small: {
			switch: {
				width: '2.2rem',
				height: '1.1rem'
			},
			slider: {
				width: '0.8rem',
				height: '0.8rem'
			},
			translate: '1rem',
			bottom: '0.15rem'
		},
		medium: {
			switch: {
				width: '3.125rem',
				height: '1.5rem'
			},
			slider: {
				width: '1rem',
				height: '1rem'
			},
			translate: '1.625rem',
			bottom: '0.25rem'
		}
	};
	export let size: 'small' | 'medium' = 'small';
</script>

<label
	class="switch"
	style="--switch-width: {sizes[size].switch.width}; --switch-height: {sizes[size].switch
		.height}; --slider-width: {sizes[size].slider.width}; --slider-height: {sizes[size].slider
		.height}; --translate: {sizes[size].translate}; --bottom: {sizes[size].bottom};"
	class:disabled
>
	<input type="checkbox" on:change bind:checked {disabled} />
	<span class="slider round" />
</label>

<style>
	.disabled .slider {
		cursor: default;
	}
	.switch {
		position: relative;
		display: inline-block;
		width: var(--switch-width);
		height: var(--switch-height);
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: var(--slider-width);
		width: var(--slider-height);
		left: 4px;
		bottom: var(--bottom);
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(var(--translate));
		-ms-transform: translateX(var(--translate));
		transform: translateX(var(--translate));
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
