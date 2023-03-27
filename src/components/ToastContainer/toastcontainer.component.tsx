import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, Toast, ToastPortal } from '@components';
import { GlobalStyles, theme } from '@theme';
import { useToastService } from '@hooks';

import { ToastContainerWrapper } from './styled';

export const ToastContainer = (): JSX.Element => {
	const [toasts] = useToastService();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastPortal>
					<ToastContainerWrapper>
						{toasts.map(({ id, config }) => (
							<Toast config={config} key={id} id={id} />
						))}
					</ToastContainerWrapper>
				</ToastPortal>
			</ErrorBoundary>
		</ThemeProvider>
	);
};
