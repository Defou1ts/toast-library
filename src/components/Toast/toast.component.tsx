import { TOASTS, TOAST_TYPE } from '@constants';
import { CloseButton } from '@components';
import { getAnimationParams, getPosition } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ config, remove, position }: ToastProps): JSX.Element => {
	const { toastType, title, message, backgroundColor, textColor: color, animation = 'slide' } = config;
	const { Icon, color: defaultColor, backgroundColor: defaultBackgroundColor } = TOASTS[toastType ?? TOAST_TYPE.INFO];

	return (
		<ToastWrapper
			animationType={animation}
			animation={getAnimationParams(position)}
			position={getPosition(position)}
			backgroundColor={backgroundColor ?? defaultBackgroundColor}
			color={color ?? defaultColor}
		>
			<CloseButton color={color ?? defaultColor} onClose={remove} />
			<ToastContentWrapper>
				<Icon fill={color ?? defaultColor} />
				<ToastTitle>{title}</ToastTitle>
				<ToastText>{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
