import type { ToastConfig, ToastPosition } from '@interfaces';
import type { PositionType } from '@types';

export interface ToastContainerProps extends ToastConfig {
	position: PositionType;
	margins: number;
}

export interface ToastContainerWrapperProps {
	position: ToastPosition;
	margins: number;
}
