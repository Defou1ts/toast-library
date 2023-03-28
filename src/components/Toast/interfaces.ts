import type { ToastConfig } from '@interfaces';

export interface ToastProps {
	config: ToastConfig;
	remove: () => void;
}
