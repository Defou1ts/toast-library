import { useCallback } from 'react';

import type { ToastConfig, ToastNotification } from '@interfaces';

import { useToastServiceSubscribe } from './useToastServiceSubscribe';
import { useToastServiceInstance } from './useToastServiceInstance';

export const useToastService = (config: ToastConfig): [ToastNotification[], typeof removeToast] => {
	const toasts = useToastServiceSubscribe();
	const toastService = useToastServiceInstance();

	toastService.config = config;

	const removeToast = useCallback((id: string): void => {
		toastService.removeNotification(id);
	}, []);

	return [toasts, removeToast];
};
