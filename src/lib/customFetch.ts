import { dev } from '$app/env';

async function customFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
	let url = typeof input === 'string' ? input : (input as Request).url;
	console.log('url', url);
	if (dev) {
		const host = import.meta.env.VITE_BACKEND_HOST;
		const port = import.meta.env.VITE_PORT;
		if (url.startsWith('/api')) {
			url = `http://${host}:${port}${url}`;
		}
	}
	const data = await fetch(url, init);
	if (!data.ok) {
		throw new Error(data.statusText);
	}
	if (data.headers.get('Content-Type').includes('application/json')) {
		return data.json();
	}
}

export default customFetch;
