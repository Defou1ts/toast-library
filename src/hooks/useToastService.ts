import { useEffect, useState } from 'react';

import { ToastService } from '@utils';
import type { ToastNotification } from '@utils';
import type { ToastConfig } from '@interfaces';

export const useToastService = (config: ToastConfig): [ToastNotification[]] => {
	const [toasts, setToasts] = useState<ToastNotification[]>([]);

	const toastService = ToastService.getInstance();

	toastService.config = config;

	const handleToastServiceUpdate = (toasts: ToastNotification[]): void => {
		setToasts([...toasts]);
	};

	useEffect(() => {
		toastService.subscribe(handleToastServiceUpdate);
		setToasts([...toastService.toasts]);

		return () => {
			toastService.unsubscribe(handleToastServiceUpdate);
		};
	}, []);

	return [toasts];
};
