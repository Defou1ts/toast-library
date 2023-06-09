import styled from 'styled-components';

import type { ToastContainerWrapperProps } from './interfaces';

export const ToastContainerWrapper = styled.div<ToastContainerWrapperProps>`
	display: grid;
	grid-template-rows: auto auto auto;
	grid-auto-rows: 0;
	row-gap: ${({ theme }) => theme.gaps[2]}px;
	font-family: 'Helvetica Neue', sans-serif;
	max-width: ${({ theme }) => theme.width[2]}px;

	width: ${({ theme }) => theme.width[6]}%;

	margin: ${({ margins }) => margins}px;

	position: fixed;
	top: ${({ position }) => position.top}px;
	left: ${({ position }) => position.left}px;
	right: ${({ position }) => position.right}px;
	bottom: ${({ position }) => position.bottom}px;
`;
