import { useLayoutEffect } from 'react';
import type { ReactPortal } from 'react';

import { createPortal } from 'react-dom';

import type { ToastPortalProps } from './interfaces';

export const ToastPortal = ({ children }: ToastPortalProps): ReactPortal => {
	const toastRoot = document.createElement('div');
	const element = document.createElement('div');

	useLayoutEffect(() => {
		toastRoot.id = 'toastRoot';
		document.body.appendChild(toastRoot);

		toastRoot.appendChild(element);

		return () => {
			toastRoot.removeChild(element);
		};
	});

	return createPortal(children, element);
};
