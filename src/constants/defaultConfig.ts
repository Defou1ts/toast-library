import { TOAST_TYPE } from '@constants';
import type { ToastConfig } from '@interfaces';

export const defaultConfig: ToastConfig = {
	type: TOAST_TYPE.INFO,
	position: 'top-right',
	duration: 5000,
	title: 'Toast Title',
	message: '',
	margin: 10,
	backgroundColor: '',
	animation: 'slide',
};
