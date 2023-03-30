import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
	{
		external: ['styled-components', 'react', 'react-dom'],
		input: './src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
			},
			{
				file: 'dist/index.es.js',
				format: 'es',
				exports: 'named',
			},
		],
		plugins: [
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
			}),
			url(),
			svgr({ icon: true }),
			resolve(),
			terser(),
			external(),
			typescript({
				clean: true,
			}),
			alias({
				entries: [
					{ find: '@/*', replacement: './src/*' },
					{ find: '@assets', replacement: './src/assets' },
					{ find: '@types', replacement: './src/types' },
					{ find: '@components', replacement: './src/components' },
					{ find: '@constants', replacement: './src/constants' },
					{ find: '@utils', replacement: './src/utils' },
					{ find: '@hooks', replacement: './src/hooks' },
					{ find: '@interfaces', replacement: './src/interfaces' },
					{ find: '@stories', replacement: './src/stories' },
					{ find: '@theme', replacement: './src/theme' },
				],
			}),
		],
	},
	{
		external: ['styled-components', 'react', 'react-dom'],
		input: './src/index.ts',
		output: [
			{
				file: 'dist/index.d.ts',
				format: 'cjs',
			},
		],
		plugins: [
			resolve(),
			external(),
			typescript({
				clean: true,
			}),
			dts(),
			alias({
				entries: [
					{ find: '@/*', replacement: './src/*' },
					{ find: '@assets', replacement: './src/assets' },
					{ find: '@types', replacement: './src/types' },
					{ find: '@components', replacement: './src/components' },
					{ find: '@constants', replacement: './src/constants' },
					{ find: '@utils', replacement: './src/utils' },
					{ find: '@hooks', replacement: './src/hooks' },
					{ find: '@interfaces', replacement: './src/interfaces' },
					{ find: '@stories', replacement: './src/stories' },
					{ find: '@theme', replacement: './src/theme' },
				],
			}),
		],
	},
];
