import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default [
	{
		input: 'src/index.js', // Path relative to package.json
		output: {
			exports: 'named',
			format: 'umd',
			file: 'rollup/UserProfileLayout.umd.js',
			name: 'UserProfileLayout',
		},
		plugins: [
			commonjs(),
			vue({
				css: true, // Dynamically inject css as a <style> tag
				compileTemplate: true, // Explicitly convert template to render function
			}),
			buble(), // Transpile to ES5
		],
	},
	{
		input: 'src/index.js', // Path relative to package.json
		output: {
			exports: 'named',
			format: 'cjs',
			file: 'rollup/UserProfileLayout.ssr.js',
		},
		plugins: [
			commonjs(),
			vue({
				css: true, // Dynamically inject css as a <style> tag
				compileTemplate: true, // Explicitly convert template to render function
				template: { optimizeSSR: true },
			}),
			buble(), // Transpile to ES5
		],
	},
	{
		input: 'src/index.js', // Path relative to package.json
		output: {
			exports: 'named',
			format: 'iife',
			file: 'rollup/UserProfileLayout.min.js',
		},
		plugins: [
			commonjs(),
			vue({
				css: true, // Dynamically inject css as a <style> tag
				compileTemplate: true, // Explicitly convert template to render function
			}),
			buble(), // Transpile to ES5
		],
	},
];
// export default {
// 	input: 'src/index.js', // Path relative to package.json
// 	output: {
// 		exports: 'named',
// 		name: 'UserProfileLayout',
// 	},
// 	plugins: [
// 		commonjs(),
// 		vue({
// 			css: true, // Dynamically inject css as a <style> tag
// 			compileTemplate: true, // Explicitly convert template to render function
// 			template: { optimizeSSR: true },
// 		}),
// 		buble(), // Transpile to ES5
// 	],
// };
