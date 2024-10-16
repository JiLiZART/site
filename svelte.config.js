import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import * as child_process from 'node:child_process';

let version = '3';

try {
	child_process.exec('git rev-parse HEAD', (err, stdout) => {
		if (!err) {
			version = stdout.toString().trim();
		}
	})
} catch {

}

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
