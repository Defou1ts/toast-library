import { ToastService } from '@utils';

export const useToastServiceInstance = (): ToastService => ToastService.getInstance();
