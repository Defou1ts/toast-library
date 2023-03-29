import type { ToastConfig } from '@interfaces';
import type { PositionType } from '@types';

export interface ToastProps {
	config: Required<ToastConfig>;
	remove: () => void;
	position: PositionType;
}
