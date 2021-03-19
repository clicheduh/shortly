// This file contains the styles of ShortenLink Component

import styled from 'styled-components';

export const OuterDiv = styled.div`
	max-width: 75%;
	height: fit-content;
	margin: 0 auto 30px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-flow: column;
	position: relative;
	top: -80px;
`;

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 0 25px;
	padding: 50px 0px 25px;
	border-radius: 10px;
	border: transparent;
	background: url(${process.env.PUBLIC_URL +
		'/images/bg-shorten-desktop.svg'}),
		${(props) => props.theme.darkViolet};
	background-position: center;
	background-repeat: no-repeat;
`;

export const InputDiv = styled.div`
	width: 100%;
	margin: 0 0 11px;
	display: flex;
	flex-wrap: wrap;
	flex-flow: row;
	justify-content: center;
`;

export const Input = styled.input.attrs((props) => ({
	type: 'text',
	placeholder: 'Shorten a link here...'
}))`
	width: 70%;
	margin: 0 24px 0 0;
	border: transparent;
	border-radius: 10px;
	padding: 16px 24px;
	font-weight: 500;
`;

export const Button = styled.button`
	padding: 10px 32px;
	font-size: 18px;
	cursor: pointer;
	font-weight: 700;
	color: ${(props) => (props.primary ? '#fff' : props.theme.grayishViolet)};
	background-color: ${(props) => (props.primary ? props.theme.cyan : '#fff')};
	border: 0;
	border-radius: 10px;
	text-decoration: none;
	text-transform: capitalize;

	&:hover {
		background-color: ${(props) =>
			props.primary ? props.theme.lightCyan : '#fff'};
	}
`;

export const Warning = styled.p`
	diplay: inline-block;
	margin: 0 0 0 70px;
	color: ${(props) => props.theme.red};
	font-style: italic;
	font-size: 16px;
`;
