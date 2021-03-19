// This file contains the styles of Jumbotron Component

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	text-align: center;
	padding: 45px 0 50px;
	background: url(${process.env.PUBLIC_URL + '/images/bg-boost-desktop.svg'}),
		${(props) => props.theme.darkViolet};
	backgrounf-repeat: no-repeat;
	background-position: center;
`;

export const Heading = styled.h1`
	font-weight: 700;
	color: #fff;
	font-size: 32px;
	margin: 0 0 25px;
`;

export const Button = styled.button`
	padding: 10px 26px;
	font-size: 18px;
	cursor: pointer;
	font-weight: 500;
	color: ${(props) => (props.primary ? '#fff' : props.theme.grayishViolet)};
	background-color: ${(props) => (props.primary ? props.theme.cyan : '#fff')};
	border: 0;
	border-radius: 40px;
	text-decoration: none;
	text-transform: capitalise;

	&:hover {
		background-color: ${(props) =>
			props.primary ? props.theme.lightCyan : '#fff'};
	}

	@media (min-width: 1024px) {
		font-size: 16px;
	}
`;
