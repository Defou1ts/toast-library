import styled from 'styled-components';

export const ToastContainerWrapper = styled.div`
	font-family: 'Helvetica Neue', sans-serif;
	max-width: ${({ theme }) => theme.width[2]}px;
	font-size: ${({ theme }) => theme.fontSize[0]}px;
`;
