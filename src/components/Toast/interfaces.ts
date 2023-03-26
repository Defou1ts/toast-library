import type { ReactNode } from 'react';

import type { TOAST_TYPE } from '@constants';

export interface ToastProps {
	type: TOAST_TYPE;
	title?: string;
	children?: ReactNode;
}
