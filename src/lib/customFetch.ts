import { dev } from '$app/env';

function customFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
	let url = typeof input === 'string' ? input : (input as Request).url;
	console.log('url', url);
	if (dev) {
		const host = import.meta.env.VITE_BACKEND_HOST;
		const port = import.meta.env.VITE_PORT;
		if (url.startsWith('/api')) {
			url = `http://${host}:${port}${url}`;
		}
	}
	return fetch(url, init);
}

export default customFetch;
