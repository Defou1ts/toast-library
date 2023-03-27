import type { ToastPosition, ToastProperties } from '@interfaces';

export type ToastWrapperProps = Pick<ToastProperties, 'backgroundColor' | 'color'> & {
	position: ToastPosition;
};
