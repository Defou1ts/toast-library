import { memo } from 'react';

import { CloseIcon } from '@assets';

import { StyledCloseButton } from './styled';

import type { CloseButtonProps } from './interfaces';

export const CloseButton = memo(function CloseButton({ onClose, color }: CloseButtonProps) {
	return (
		<StyledCloseButton color={color} onClick={onClose}>
			<CloseIcon />
		</StyledCloseButton>
	);
});
