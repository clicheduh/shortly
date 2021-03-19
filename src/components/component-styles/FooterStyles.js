// This file contains the styles of Footer Component

import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${(props) => props.theme.veryDarkViolet};
	padding: 40px 0;
	display: flex;
	flex-flow: column;
`;

export const FooterNav = styled.div`
	background-color: ${(props) => props.theme.veryDarkViolet};
	padding: 40px 0;
`;
