import { useEffect, useState } from 'react';

import { ToastService } from '@utils';
import type { ToastNotification } from '@utils';

export const useToastService = (): [ToastNotification[]] => {
	const [toasts, setToasts] = useState<ToastNotification[]>([]);

	const toastService = ToastService.getInstance();

	const handleToastServiceUpdate = (): void => {
		setToasts([...toastService.toasts]);
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
