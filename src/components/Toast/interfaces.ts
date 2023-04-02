import type { ToastConfig, ToastPosition } from '@interfaces';
import type { AnimationType, PositionType } from '@types';

export interface ToastProps {
	config: ToastConfig;
	remove: () => void;
	position: PositionType;
}

export interface ToastWrapperProps {
	position: ToastPosition;
	animation: ToastPosition;
	animationType: AnimationType;
	backgroundColor: string;
	color: string;
}

