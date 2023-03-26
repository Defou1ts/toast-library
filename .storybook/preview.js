import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '@theme';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withThemeProvider = (Story, context) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	);
};

export const decorators = [withThemeProvider];
