const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	// staticDirs: [
	// 	{ from: '@/*', to: './src/*' },
	// 	{ from: '@assets', to: './src/assets' },
	// 	{ from: '@types', to: './src/types' },
	// 	{ from: '@components', to: '/src/components' },
	// 	{ from: '@constants', to: './src/constants' },
	// 	{ from: '@utils', to: './src/utils' },
	// 	{ from: '@hooks', to: './src/hooks' },
	// 	{ from: '@interfaces', to: './src/interfaces' },
	// 	{ from: '@stories', to: './src/stories' },
	// 	{ from: '@theme', to: './src/theme' },
	// ],
	webpackFinal: async (config, { configType }) => {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.inline.svg$/;

		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		];

		config.module.rules.unshift({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
