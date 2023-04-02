import { useState, useEffect } from 'react';

import type { ToastNotification } from '@interfaces';
import { ToastService } from '@utils';

export const useToastServiceSubscribe = (): ToastNotification[] => {
	const [toasts, setToasts] = useState<ToastNotification[]>([]);

	const toastService = ToastService.getInstance();

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

	return toasts;
};
