import { ErrorIcon, InformationIcon, SuccessIcon, WarningIcon } from '@assets';
import type { ToastProperties } from '@interfaces';
import { colors } from '@theme';

import { TOAST_TITLE } from './toastTitle';
import { TOAST_TYPE } from './toastTypes';

const { SUCCESS, ERROR, WARNING, INFO } = TOAST_TITLE;

export const SUCCESS_TOAST: ToastProperties = {
	icon: <SuccessIcon />,
	backgroundColor: colors.green,
	color: colors.white,
	title: SUCCESS,
};

export const ERROR_TOAST: ToastProperties = {
	icon: <ErrorIcon />,
	backgroundColor: colors.red,
	color: colors.white,
	title: ERROR,
};
export const INFO_TOAST: ToastProperties = {
	icon: <InformationIcon />,
	backgroundColor: colors.purple,
	color: colors.white,
	title: INFO,
};
export const WARNING_TOAST: ToastProperties = {
	icon: <WarningIcon />,
	backgroundColor: colors.yellow,
	color: colors.black,
	title: WARNING,
};

export const TOASTS = {
	[TOAST_TYPE.SUCCESS]: SUCCESS_TOAST,
	[TOAST_TYPE.ERROR]: ERROR_TOAST,
	[TOAST_TYPE.INFO]: INFO_TOAST,
	[TOAST_TYPE.WARNING]: WARNING_TOAST,
};
