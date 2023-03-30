import styled from 'styled-components';

import type { StyledCloseButtonProps } from './types';

export const StyledCloseButton = styled.button<StyledCloseButtonProps>`
	background: transparent;
	cursor: pointer;
	float: right;

	& svg {
		width: ${({ theme }) => theme.width[0]}px;
		height: ${({ theme }) => theme.width[0]}px;
		fill: ${({ color }) => color};
	}

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		& svg {
			width: ${({ theme }) => theme.width[3]}px;
			height: ${({ theme }) => theme.height[3]}px;
		}
	}
`;
