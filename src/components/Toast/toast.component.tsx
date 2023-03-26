import { TOASTS } from '@constants';
import { CloseIcon } from '@assets';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ type, children, title }: ToastProps): JSX.Element => {
	const { icon, title: exampleTitle, ...props } = TOASTS[type];

	return (
		<ToastWrapper {...props}>
			<div>
				<CloseIcon />
			</div>
			<ToastContentWrapper>
				{icon}
				<ToastTitle>{title ?? exampleTitle}</ToastTitle>
				<ToastText>{children}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
