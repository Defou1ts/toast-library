import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, Toast, ToastPortal } from '@components';
import { GlobalStyles, theme } from '@theme';
import { useToastService } from '@hooks';
import { getPosition, ToastService } from '@utils';

import { ToastContainerWrapper } from './styled';

import type { ToastContainerProps } from './interfaces';

export const ToastContainer = ({ position, ...toastContainerConfig }: ToastContainerProps): JSX.Element => {
	const [toasts] = useToastService(toastContainerConfig);

	const handleRemoveNotification = (id: string) => (): void => {
		ToastService.getInstance().removeNotification(id);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastPortal>
					<ToastContainerWrapper position={getPosition(position)}>
						{toasts.slice(0, 3).map(({ id, toastConfig }) => (
							<Toast
								remove={handleRemoveNotification(id)}
								config={{ ...ToastService.getInstance().config, ...toastConfig }}
								key={id}
								id={id}
							/>
						))}
					</ToastContainerWrapper>
				</ToastPortal>
			</ErrorBoundary>
		</ThemeProvider>
	);
};
