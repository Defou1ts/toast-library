import type { PositionType, ToastConfig } from '@interfaces';

export interface ToastProps {
	config: ToastConfig;
	remove: () => void;
	position: PositionType;
}
