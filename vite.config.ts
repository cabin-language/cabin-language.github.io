import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
	define: {
		VITE_MODE: command === "build" ? "'production'" : "'dev'"
	},
	plugins: [
		sveltekit(),
	],
}));
