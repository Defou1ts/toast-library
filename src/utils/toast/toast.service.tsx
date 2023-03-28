import { v4 as uuidv4 } from 'uuid';

import type { ToastConfig } from '@interfaces';
import { TOAST_TYPE } from '@constants';

export interface ToastNotification {
	id: string;
	toastConfig: ToastConfig;
}

export type Subscriber = () => void;

export class ToastService {
	private static instance: ToastService;
	private _toasts: ToastNotification[] = [];
	private subscribers: Subscriber[] = [];
	private _config: ToastConfig = {
		type: TOAST_TYPE.INFO,
		duration: 5000,
		title: 'Toast Title',
		animation: 'slide',
	};

	public get config(): ToastConfig {
		return this._config;
	}

	public set config(config: ToastConfig) {
		this._config = { ...this._config, ...config };
	}

	private constructor() {}

	public static getInstance(): ToastService {
		if (ToastService.instance === undefined) {
			ToastService.instance = new ToastService();
		}
		return ToastService.instance;
	}

	public addNotification(config: ToastConfig): string {
		const id = uuidv4();
		this._toasts.push({ id, toastConfig: config });
		this.notifySubscribers();
		return id;
	}

	public removeNotification(id: string): void {
		this._toasts = this._toasts.filter((toast) => toast.id !== id);
		this.notifySubscribers();
	}

	public subscribe(subcriber: Subscriber): void {
		this.subscribers.push(subcriber);
	}

	public unsubscribe(callback: Subscriber): void {
		this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
	}

	private notifySubscribers(): void {
		this.subscribers.forEach((subscriber) => {
			subscriber();
		});
	}

	public get toasts(): ToastNotification[] {
		return this._toasts;
	}
}
