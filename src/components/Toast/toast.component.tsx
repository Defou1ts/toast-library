import { TOASTS, TOAST_TYPE } from '@constants';
import { CloseButton } from '@components';
import { getAnimationParams, getPosition } from '@utils';

import { ToastContentWrapper, ToastText, ToastTitle, ToastWrapper } from './styled';

import type { ToastProps } from './interfaces';

export const Toast = ({ config, remove, position }: ToastProps): JSX.Element => {
	const { toastType, title, message, backgroundColor, textColor: color, animation = 'slide' } = config;
	const {
		Icon,
		textColor: defaultColor,
		backgroundColor: defaultBackgroundColor,
	} = TOASTS[toastType ?? TOAST_TYPE.INFO];

	return (
		<ToastWrapper
			data-test-id="toast-wrapper"
			animationType={animation}
			animation={getAnimationParams(position)}
			position={getPosition(position)}
			backgroundColor={backgroundColor ?? defaultBackgroundColor}
			color={color ?? defaultColor}
		>
			<CloseButton color={color ?? defaultColor} onClose={remove} />
			<ToastContentWrapper>
				<Icon data-test-id="toast-icon" fill={color ?? defaultColor} />
				<ToastTitle data-test-id="toast-title">{title}</ToastTitle>
				<ToastText data-test-id="toast-text">{message}</ToastText>
			</ToastContentWrapper>
		</ToastWrapper>
	);
};
