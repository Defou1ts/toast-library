import type { PositionType } from '@types';

import type { ToastConfig } from './toastConfig';

export interface ToastContainerProps extends ToastConfig {
	position: PositionType;
	margins: number;
}
