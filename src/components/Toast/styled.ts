import styled from 'styled-components';

import type { ToastWrapperProps } from './types';

export const ToastWrapper = styled.div<ToastWrapperProps>`
	color: ${({ color }) => color};
	background-color: ${({ backgroundColor }) => backgroundColor};
	max-width: ${({ theme }) => theme.width[2]}px;
	padding-top: ${({ theme }) => theme.padding[0]}px;
	padding-right: ${({ theme }) => theme.padding[1]}px;
	padding-bottom: ${({ theme }) => theme.padding[3]}px;
	padding-left: ${({ theme }) => theme.padding[2]}px;
	border-radius: ${({ theme }) => theme.borderRadius[0]}px;
	box-shadow: ${({ theme }) => theme.shadow[0]};

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		padding: ${({ theme }) => theme.padding[4]}px;
		padding-bottom: ${({ theme }) => theme.padding[3]}px;
	}
`;

export const ToastContentWrapper = styled.div`
	display: grid;
	gap: 0px ${({ theme }) => theme.gaps[0]}px;
	grid-template-columns: ${({ theme }) => theme.width[1]}px auto;
	grid-template-rows: auto auto;
	grid-template-areas:
		'icon title'
		'. text';
	align-items: center;

	& svg {
		width: ${({ theme }) => theme.width[1]}px;
		height: ${({ theme }) => theme.width[1]}px;
		fill: ${({ color }) => color};
	}

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		gap: ${({ theme }) => theme.gaps[1]}px ${({ theme }) => theme.gaps[1]}px;

		& svg {
			width: ${({ theme }) => theme.width[4]}px;
			height: ${({ theme }) => theme.width[4]}px;
		}
	}
`;

export const ToastTitle = styled.p`
	margin-top: ${({ theme }) => theme.margins[0]}px;
	font-size: ${({ theme }) => theme.fontSize[1]}px;
	grid-area: title;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: ${({ theme }) => theme.fontSize[0]}px;
	}
`;

export const ToastText = styled.p`
	font-size: ${({ theme }) => theme.fontSize[0]}px;
	grid-area: text;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: ${({ theme }) => theme.fontSize[2]}px;
	}
`;
