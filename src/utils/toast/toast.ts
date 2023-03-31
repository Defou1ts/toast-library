import type { ToastConfig } from '@interfaces';

import { ToastService } from './toast.service';

export const toast = (config: ToastConfig): void => {
	ToastService.getInstance().addNotification(config ?? {});
};
