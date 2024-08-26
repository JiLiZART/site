import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import * as child_process from 'node:child_process';

const version = child_process.execSync('git rev-parse HEAD').toString().trim()

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
        version: {
            name: version
        },
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        })
	}
};

export default config;
