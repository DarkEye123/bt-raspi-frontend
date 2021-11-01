<script lang="ts">
	const sizes = {
		small: '1rem',
		medium: '1.5rem',
		big: '2rem'
	};
	export let name;
	export let focusable = false;
	export let size: 'small' | 'medium' | 'big' = 'small';
</script>

<svg class={$$props.class} {focusable} width={sizes[size]} height={sizes[size]} on:click>
	<use href={`/icons.svg#${name}`} />
</svg>
