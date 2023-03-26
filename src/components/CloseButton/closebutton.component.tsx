import { CloseIcon } from '@assets';

import { type CloseButtonProps } from './interfaces';
import { StyledCloseButton } from './styled';

export const CloseButton = ({ onClose, color }: CloseButtonProps): JSX.Element => {
	return (
		<StyledCloseButton color={color} onClick={onClose}>
			<CloseIcon />
		</StyledCloseButton>
	);
};
