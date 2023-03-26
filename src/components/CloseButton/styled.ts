import styled from 'styled-components';

import type { StyledCloseButtonProps } from './types';

export const StyledCloseButton = styled.button<StyledCloseButtonProps>`
	background: transparent;
	cursor: pointer;
	float: right;

	& svg {
		fill: ${({ color }) => color};
	}
`;