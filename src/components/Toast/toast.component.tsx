import { useEffect } from 'react';

import { TOASTS, TOAST_TYPE } from '@constants';
import { CloseButton } from '@components';
import { getPosition, ToastService } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ id, config }: ToastProps): JSX.Element => {
	const {
		type = TOAST_TYPE.INFO,
		position = 'top-left',
		duration = 5000,
		title = 'Toast Title',
		message,
		margin,
		animation = 'slide',
	} = config;

	const { Icon, color, ...props } = TOASTS[type];

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
		<ToastWrapper {...props} color={color} position={getPosition(position ?? 'top-left', margin)}>
			<CloseButton color={color} onClose={handleClose} />
			<ToastContentWrapper>
				<Icon />
				<ToastTitle>{title}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
