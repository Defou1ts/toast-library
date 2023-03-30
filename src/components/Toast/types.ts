import type { ToastPosition } from '@interfaces';
import type { AnimationType } from '@types';

export interface ToastWrapperProps {
	position: ToastPosition;
	animation: ToastPosition;
	animationType: AnimationType;
	backgroundColor: string;
	color: string;
}
