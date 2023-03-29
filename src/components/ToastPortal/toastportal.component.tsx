import { useLayoutEffect } from 'react';
import type { ReactPortal } from 'react';

import { createPortal } from 'react-dom';

import type { ToastPortalProps } from './interfaces';

export const ToastPortal = ({ children }: ToastPortalProps): ReactPortal | null => {
	const toastRoot = document.createElement('div');

	useLayoutEffect(() => {
		toastRoot.id = 'toastRoot';
		document.body.appendChild(toastRoot);

		return () => {
			document.body.removeChild(toastRoot);
		};
	}, []);

	const toastRootElement = document.getElementById('toastRoot');

	if (toastRootElement !== null) {
		return createPortal(children, toastRootElement);
	}

	return null;
};
