import type { PositionType, ToastPosition } from '@interfaces';

export const getPosition = (position: PositionType, margin?: number): ToastPosition => {
	switch (position) {
		case 'top-right':
			return {
				top: margin ?? 10,
				right: margin ?? 10,
			};
		case 'top-left':
			return {
				top: margin ?? 10,
				left: margin ?? 10,
			};
		case 'bottom-left':
			return {
				bottom: margin ?? 10,
				left: margin ?? 10,
			};
		case 'bottom-right':
			return {
				bottom: margin ?? 10,
				right: margin ?? 10,
			};
	}
};
