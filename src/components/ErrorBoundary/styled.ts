import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	display: grid;
	text-align: center;
	border-radius: ${({ theme }) => theme.borderRadius[0]};
	padding: ${({ theme }) => theme.padding[0]};
	color: ${({ theme }) => theme.colors.black};
	background: ${({ theme }) => theme.colors.red};
`;
