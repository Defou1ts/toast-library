import type { ToastNotification } from '@interfaces';

export type Subscriber = (toasts: ToastNotification[]) => void;
