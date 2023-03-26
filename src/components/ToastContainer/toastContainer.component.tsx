import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, Toast } from '@components';
import { GlobalStyles, theme } from '@theme';
import { TOAST_TYPE } from '@constants';

import { ToastContainerWrapper } from './styled';

export const ToastContainer = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ErrorBoundary>
				<ToastContainerWrapper>
					<Toast type={TOAST_TYPE.SUCCESS}>
						Произошло успешное подключение к базе! Теперь вы можете создавать новые модели! Удачи!
					</Toast>
					<Toast type={TOAST_TYPE.ERROR} />
					<Toast type={TOAST_TYPE.WARNING} />
					<Toast type={TOAST_TYPE.INFO} />
				</ToastContainerWrapper>
			</ErrorBoundary>
		</ThemeProvider>
	);
};
