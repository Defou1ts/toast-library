import type { TOAST_TYPE } from '@constants';

export type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastConfig {
	type?: TOAST_TYPE;
	position?: PositionType;
	duration?: number;
	title?: string;
	message?: string;
	margin?: number;
	animation?: 'fade' | 'slide';
}
