import { useCallback } from 'react';

import type { ToastNotification } from '@interfaces';

import { useToastServiceSubscribe } from './useToastServiceSubscribe';
import { useToastServiceInstance } from './useToastServiceInstance';

export const useToastService = (): [ToastNotification[], typeof removeToast] => {
	const toasts = useToastServiceSubscribe();
	const toastService = useToastServiceInstance();

	const removeToast = useCallback((id: string): void => {
		toastService.removeNotification(id);
	}, []);

	return [toasts, removeToast];
};
