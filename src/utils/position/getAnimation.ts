import type { ToastPosition } from '@interfaces';
import type { PositionType } from '@types';

export const getAnimationParams = (position: PositionType): ToastPosition => {
	switch (position) {
		case 'top-right':
			return {
				right: -500,
			};
		case 'top-left':
			return {
				left: -500,
			};
		case 'bottom-left':
			return {
				left: -500,
			};
		case 'bottom-right':
			return {
				right: -500,
			};
	}
};
