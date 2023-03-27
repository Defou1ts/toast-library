import { useEffect } from 'react';

import { defaultConfig, TOASTS, TOAST_TYPE } from '@constants';
import { CloseButton } from '@components';
import { ToastService } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ id, config = defaultConfig }: ToastProps): JSX.Element => {
	const { type = TOAST_TYPE.INFO, position, duration, title, message, margin, backgroundColor, animation } = config;

	const { icon, title: exampleTitle, color, ...props } = TOASTS[type];

	const handleRemoveNotification = (): void => {
		ToastService.getInstance().removeNotification(id);
	};

	const handleClose = (): void => {
		ToastService.getInstance().removeNotification(id);
	};

	useEffect(() => {
		setTimeout(handleRemoveNotification, duration);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			ToastService.getInstance().removeNotification(id);
		}, 3000);
	});

	return (
		<ToastWrapper {...props} color={color}>
			<CloseButton color={color} onClose={handleClose} />
			<ToastContentWrapper>
				{icon}
				<ToastTitle>{title ?? exampleTitle}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
