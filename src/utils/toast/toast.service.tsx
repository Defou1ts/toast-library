import { v4 as uuidv4 } from 'uuid';

import type { ToastConfig, ToastNotification } from '@interfaces';
import type { Subscriber } from '@types';
import { defaultToastConfig } from '@constants';

export class ToastService {
	private static instance: ToastService;
	private _toasts: ToastNotification[] = [];
	private subscribers: Subscriber[] = [];
	private _config: Required<ToastConfig> = defaultToastConfig;

	private constructor() {}

	public get toasts(): ToastNotification[] {
		return this._toasts;
	}

	public get config(): ToastConfig {
		return this._config;
	}

	public set config(config: ToastConfig) {
		this._config = { ...this._config, ...config };
	}

	public static getInstance(): ToastService {
		if (ToastService.instance === undefined) {
			ToastService.instance = new ToastService();
		}
		return ToastService.instance;
	}

	public addNotification(config: ToastConfig): string {
		const id = uuidv4();
		this._toasts.push({ id, toastConfig: config });

		if (this._config.duration !== undefined) {
			void this.removeNotificationAfterDuration(id, config.duration ?? this._config.duration);
		}

		this.notifySubscribers();
		return id;
	}

	private async removeNotificationAfterDuration(id: string, duration: number): Promise<void> {
		setTimeout(() => {
			this.removeNotification(id);
		}, duration);
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
			subscriber(this._toasts);
		});
	}
}
