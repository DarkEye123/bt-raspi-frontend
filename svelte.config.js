import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// see https://github.com/sveltejs/kit/tree/master/packages/adapter-node (works for production run)
		// also https://kit.svelte.dev/faq#how-do-i-use-x-with-sveltekit-how-do-i-use-middleware (should be applied for local dev)
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT' // it is KEY value from .env file
			}
		})
	}
};

export default config;
