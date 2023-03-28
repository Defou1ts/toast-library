import { useEffect } from 'react';

import { TOASTS } from '@constants';
import { CloseButton } from '@components';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ id, config, remove }: ToastProps): JSX.Element => {
	const { type, duration, title, message, animation = 'slide' } = config;

	const { Icon, color, ...props } = TOASTS[type ?? 'success'];

	useEffect(() => {
		setTimeout(remove, duration);
	}, []);

	return (
		<ToastWrapper {...props} color={color}>
			<CloseButton color={color} onClose={remove} />
			<ToastContentWrapper>
				<Icon />
				<ToastTitle>{title}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
