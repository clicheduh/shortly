// This file contains the styles of ShortenedLinkItem Component

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 0 20px;
	padding: 25px 30px 20px 25px;
	border-radius: 7px;
	border: transparent;
	background-color: #fff;
	display: flex;
	flex-flow: row;
	align-content: middle;
	justify-content: space-between;
`;

// export const LeftSide = styled.div`
// 	width: 60%;
// 	text-align: left;
// `;

export const Link = styled.p`
	color: ${(props) => props.theme.darkViolet};
	font-weight: 500;
	font-size: 18px;
	margin-top: auto;
	margin-bottom: auto;
`;

export const RightSide = styled.div`
	width: 40%;
	text-align: right;
`;

export const ShortenedLink = styled.a`
	margin: 0;
	color: ${(props) => props.theme.cyan};
	font-weight: 500;
	font-size: 18px;
	text-decoration: none;
`;

export const Button = styled.button`
	margin: 0 0 0 18px;
	padding: 11px 30px;
	font-size: 14px;
	cursor: pointer;
	font-weight: 500;
	color: ${(props) => (props.primary ? '#fff' : props.theme.grayishViolet)};
	background-color: ${(props) => (props.primary ? props.theme.cyan : '#fff')};
	border: 0;
	border-radius: 5px;
	text-decoration: none;
	text-transform: capitalize;

	&:hover {
		background-color: ${(props) =>
			props.primary ? props.theme.lightCyan : '#fff'};
	}
`;
