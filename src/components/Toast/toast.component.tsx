import { useEffect } from 'react';

import { TOASTS } from '@constants';
import { CloseButton } from '@components';
import { ToastService } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ id, config }: ToastProps): JSX.Element => {
	const { type, duration, title, message, animation = 'slide' } = config;

	const { Icon, color, ...props } = TOASTS[type ?? 'success'];

	const handleRemoveNotification = (): void => {
		ToastService.getInstance().removeNotification(id);
	};

	const handleClose = (): void => {
		ToastService.getInstance().removeNotification(id);
	};

	useEffect(() => {
		setTimeout(handleRemoveNotification, duration);
	}, []);

	return (
		<ToastWrapper {...props} color={color}>
			<CloseButton color={color} onClose={handleClose} />
			<ToastContentWrapper>
				<Icon />
				<ToastTitle>{title}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
