import { useLayoutEffect } from 'react';
import type { ReactPortal } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';

import type { ToastPortalProps } from './interfaces';

const toastId = uuidv4();

export const ToastPortal = ({ children }: ToastPortalProps): ReactPortal | null => {
	const toastRoot = document.createElement('div');

	useLayoutEffect(() => {
		toastRoot.id = 'toastRoot-' + toastId;
		document.body.appendChild(toastRoot);

		return () => {
			document.body.removeChild(toastRoot);
		};
	}, []);

	const toastRootElement = document.getElementById('toastRoot-' + toastId);

	if (toastRootElement !== null) {
		return createPortal(children, toastRootElement);
	}

	return null;
};
