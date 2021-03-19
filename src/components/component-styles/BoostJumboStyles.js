// This file contains the styles of BoostJumbo Component

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	text-align: center;
	padding: 63px 0;
	background: url(${process.env.PUBLIC_URL + '/images/bg-boost-mobile.svg'}),
		${(props) => props.theme.darkViolet};
	background-position: bottom;
	background-repeat: no-repeat;

	@media (min-width: 576px) {
		padding: 45px 0 50px;
		background: url(${process.env.PUBLIC_URL +
			'/images/bg-boost-desktop.svg'}),
			${(props) => props.theme.darkViolet};
		background-position: center;
	}
`;

export const Heading = styled.h1`
	font-weight: 700;
	color: #fff;
	font-size: 26px;
	margin: 0 0 25px;

	@media (min-width: 576px) {
		font-size: 32px;
	}
`;

export const Button = styled.button`
	padding: 10px 26px;
	font-size: 16px;
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
