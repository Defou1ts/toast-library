import type { TOAST_TYPE } from '@constants';

export interface ToastProps {
	type: TOAST_TYPE;
	title?: string;
	message?: string;
}
