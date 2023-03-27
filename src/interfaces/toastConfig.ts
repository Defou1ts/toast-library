import type { TOAST_TYPE } from '@constants';

export interface ToastConfig {
	type?: TOAST_TYPE;
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	duration?: number;
	title?: string;
	message?: string;
	margin?: number;
	animation?: 'fade' | 'slide';
}
