import { CloseIcon } from '@assets';

import { StyledCloseButton } from './styled';

import type {CloseButtonProps} from './interfaces';

export const CloseButton = ({ onClose, color }: CloseButtonProps): JSX.Element => {
	return (
		<StyledCloseButton color={color} onClick={onClose}>
			<CloseIcon />
		</StyledCloseButton>
	);
};
