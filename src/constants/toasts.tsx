import { ErrorIcon, InformationIcon, SuccessIcon, WarningIcon } from '@assets';
import type { ToastProperties } from '@interfaces';
import { colors } from '@theme';

import { TOAST_TYPE } from './toastType';

export const SUCCESS_TOAST: ToastProperties = {
	Icon: SuccessIcon,
	backgroundColor: colors.green,
	textColor: colors.white,
};

export const ERROR_TOAST: ToastProperties = {
	Icon: ErrorIcon,
	backgroundColor: colors.red,
	textColor: colors.white,
};
export const INFO_TOAST: ToastProperties = {
	Icon: InformationIcon,
	backgroundColor: colors.purple,
	textColor: colors.white,
};
export const WARNING_TOAST: ToastProperties = {
	Icon: WarningIcon,
	backgroundColor: colors.yellow,
	textColor: colors.black,
};

export const TOASTS = {
	[TOAST_TYPE.SUCCESS]: SUCCESS_TOAST,
	[TOAST_TYPE.ERROR]: ERROR_TOAST,
	[TOAST_TYPE.INFO]: INFO_TOAST,
	[TOAST_TYPE.WARNING]: WARNING_TOAST,
};
