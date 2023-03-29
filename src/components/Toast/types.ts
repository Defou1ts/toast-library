import type { AnimationType, ToastPosition, ToastProperties } from '@interfaces';

export type ToastWrapperProps = Pick<ToastProperties, 'backgroundColor' | 'color'> & {
	position: ToastPosition;
	animation: ToastPosition;
	animationType: AnimationType;
};
