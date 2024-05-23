import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    base: process.argv.includes('dev') ? '' : "/personal_site",
	plugins: [sveltekit()]
});
