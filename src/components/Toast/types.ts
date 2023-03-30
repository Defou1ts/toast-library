import type { ToastPosition, ToastProperties } from '@interfaces';
import type { AnimationType } from '@types';

export type ToastWrapperProps = Pick<ToastProperties, 'backgroundColor' | 'color'> & {
	position: ToastPosition;
	animation: ToastPosition;
	animationType: AnimationType;
};
