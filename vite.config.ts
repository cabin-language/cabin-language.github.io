import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
	define: {

		// Define a VITE_MODE variable, used in `/src/components/Snippet.svelte`.
		VITE_MODE: command === "build" ? "'production'" : "'dev'"
	},
	plugins: [
		sveltekit(),
	],
}));
