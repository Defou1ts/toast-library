import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, ToastRoot } from '@components';
import { GlobalStyles, theme } from '@theme';
import type { ToastContainerProps } from '@interfaces';

export const ToastContainer = (props: ToastContainerProps): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastRoot {...props} />
			</ErrorBoundary>
		</ThemeProvider>
	);
};
