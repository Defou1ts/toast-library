import type { TOAST_TITLE } from '@constants';
import type { colors } from '@theme';

export interface ToastProperties {
	icon: JSX.Element;
	backgroundColor: (typeof colors)[keyof typeof colors];
	color: (typeof colors)[keyof typeof colors];
	title: TOAST_TITLE;
}
