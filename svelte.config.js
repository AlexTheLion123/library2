/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
	},
	module: {
		rules: [
			{
				test: /.svelte$/,
				loader: "svelte-loader",
				options: { hotReload: true },
			},
		],
	},
};

export default config;
