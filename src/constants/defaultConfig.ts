import type { ToastConfig } from '@interfaces';

import { TOAST_TYPE } from '../constants/toastType';

export const defaultConfig: ToastConfig = {
	type: TOAST_TYPE.INFO,
	position: 'top-right',
	duration: 5000,
	title: 'Toast Title',
	message: '',
	margin: 10,
	animation: 'slide',
};
