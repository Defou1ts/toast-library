import type { ToastConfig } from '@interfaces';

import { TOASTS } from './toasts';
import { TOAST_TYPE } from './toastType';

export const defaultToastConfig: Required<ToastConfig> = {
	toastType: TOAST_TYPE.INFO,
	duration: 5000,
	title: 'Toast Title',
	animation: 'slide',
	message: '',
	backgroundColor: TOASTS[TOAST_TYPE.INFO].backgroundColor,
	textColor: TOASTS[TOAST_TYPE.INFO].textColor,
};
