import { useToastServiceInstance } from '@hooks';
import type { ToastConfig } from '@interfaces';

export const toast = (config: ToastConfig): void => {
	const toastService = useToastServiceInstance();
	toastService.addNotification(config ?? {});
};
