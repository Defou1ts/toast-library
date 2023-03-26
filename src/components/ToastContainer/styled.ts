import styled from 'styled-components';

export const ToastContainerWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-auto-rows: 0;
	overflow-y: hidden;
	gap: 20px 0px;
	font-family: 'Helvetica Neue', sans-serif;
	max-width: ${({ theme }) => theme.width[2]}px;
`;
