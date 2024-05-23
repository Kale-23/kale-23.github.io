import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    process.argv.includes('dev') ? '' : "/test/",
	plugins: [sveltekit()]
});
