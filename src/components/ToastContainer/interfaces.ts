import type { ToastConfig, ToastPosition } from '@interfaces';

import type { PositionType } from './types';

export interface ToastContainerProps extends ToastConfig {
	position: PositionType;
}

export interface ToastContainerWrapperProps {
	position: ToastPosition;
}
