import type { colors } from '@theme';

export interface CloseButtonProps {
	onClose: () => void;
	color: (typeof colors)[keyof typeof colors];
}

export interface StyledCloseButtonProps {
	color: (typeof colors)[keyof typeof colors];
}
