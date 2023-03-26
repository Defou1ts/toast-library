import { useState } from 'react';

import { TOASTS } from '@constants';
import { CloseButton } from '@components';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ type, message, title }: ToastProps): JSX.Element | null => {
	const [isOpened, setIsOpened] = useState<boolean>(true);
	const { icon, title: exampleTitle, color, ...props } = TOASTS[type];

	const handleClose = (): void => {
		setIsOpened(false);
	};

	if (!isOpened) {
		return null;
	}

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
