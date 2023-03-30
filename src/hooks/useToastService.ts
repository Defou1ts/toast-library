import { useCallback, useEffect, useState } from 'react';

import { ToastService } from '@utils';
import type { ToastNotification, ToastConfig } from '@interfaces';

export const useToastService = (config: ToastConfig): [ToastNotification[], typeof removeToast] => {
	const [toasts, setToasts] = useState<ToastNotification[]>([]);

	const toastService = ToastService.getInstance();

	toastService.config = config;

	useEffect(() => {
		toastService.subscribe(handleToastServiceUpdate);
		setToasts([...toastService.toasts]);

		return () => {
			toastService.unsubscribe(handleToastServiceUpdate);
		};
	}, []);

	const handleToastServiceUpdate = (toasts: ToastNotification[]): void => {
		setToasts([...toasts]);
	};

	const removeToast = useCallback((id: string): void => {
		toastService.removeNotification(id);
	}, []);

	return [toasts, removeToast];
};
