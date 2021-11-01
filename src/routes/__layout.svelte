<!-- reasoning https://dev.to/evanwinter/comment/1f3kc -->
<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				key: page.path
			}
		};
	}
</script>

<script lang="ts">
	import '../app.css';
	import { blur } from 'svelte/transition';
	export let key = '';
</script>

<!-- in this key direct usage of $page.path wasn't doing ok. I saw component out but not in.
explanation could be that $page.path has reactive value and if I load it via context="module" it has previous and next value -->
{#key key}
	<main transition:blur><slot /></main>
{/key}

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
