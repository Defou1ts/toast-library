import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, Toast, ToastPortal } from '@components';
import { GlobalStyles, theme } from '@theme';
import { useToastService } from '@hooks';
import { getPosition } from '@utils';
import { defaultToastConfig } from '@constants';

import { ToastContainerWrapper } from './styled';

import type { ToastContainerProps } from './interfaces';

export const ToastContainer = ({ position, margins, ...toastContainerConfig }: ToastContainerProps): JSX.Element => {
	const [toasts, removeToast] = useToastService(toastContainerConfig);

	const handleRemoveToast = (id: string) => (): void => {
		removeToast(id);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastPortal>
					{toasts.length > 0 && (
						<ToastContainerWrapper position={getPosition(position)} margins={margins}>
							{toasts.slice(0, 3).map(({ id, toastConfig }) => (
								<Toast
									position={position}
									remove={handleRemoveToast(id)}
									config={{
										...defaultToastConfig,
										...toastContainerConfig,
										...toastConfig,
									}}
									key={id}
								/>
							))}
						</ToastContainerWrapper>
					)}
				</ToastPortal>
			</ErrorBoundary>
		</ThemeProvider>
	);
};
