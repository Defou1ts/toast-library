import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/ErrorBoundary/errorboundary.component';

import { GlobalStyles, theme } from '@theme';

import { ToastContainerWrapper } from './styled';

export const ToastContainer = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastContainerWrapper>Toast Container</ToastContainerWrapper>
			</ErrorBoundary>
		</ThemeProvider>
	);
};
