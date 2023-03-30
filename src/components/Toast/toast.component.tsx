import { TOASTS } from '@constants';
import { CloseButton } from '@components';
import { getAnimationParams, getPosition } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ config, remove, position }: ToastProps): JSX.Element => {
	const { toastType, title, message, animation = 'slide' } = config;
	const { Icon, color, ...props } = TOASTS[toastType];

	return (
		<ToastWrapper
			animationType={animation}
			animation={getAnimationParams(position)}
			position={getPosition(position)}
			{...props}
			color={color}
		>
			<CloseButton color={color} onClose={remove} />
			<ToastContentWrapper>
				<Icon />
				<ToastTitle>{title}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
