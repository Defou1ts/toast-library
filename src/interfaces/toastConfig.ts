import type { TOAST_TYPE } from '@constants';
import type { AnimationType } from '@types';

export interface ToastConfig {
	type?: TOAST_TYPE;
	duration?: number;
	title?: string;
	message?: string;
	animation?: AnimationType;
}
