// This file contains the styles of ShortenLink Component

import styled from 'styled-components';

export const OuterDiv = styled.div`
	max-width: 85%;
	height: fit-content;
	margin: 0 auto -20px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-flow: column;
	position: relative;
	top: -80px;

	@media (min-width: 768px) {
		margin: 0 auto 30px;
		max-width: 75%;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 0 25px;
	padding: 30px 30px 15px;
	border-radius: 10px;
	border: transparent;
	background: url(${process.env.PUBLIC_URL +
		'/images/bg-shorten-desktop.svg'}),
		${(props) => props.theme.darkViolet};
	background-position: bottom left;
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		padding: 50px 60px 25px;
		background: url(${process.env.PUBLIC_URL +
			'/images/bg-shorten-mobile.svg'}),
			${(props) => props.theme.darkViolet};
		background-position: center;
	}
`;

export const InputDiv = styled.div`
	width: 100%;
	margin: 0 0 11px;
	display: flex;
	flex-wrap: wrap;
	flex-flow: column;
	justify-content: space-between;

	@media (min-width: 768px) {
		flex-flow: row;
		justify-content: space-between;
	}
`;

export const Input = styled.input.attrs((props) => ({
	type: 'text',
	placeholder: 'Shorten a link here...'
}))`
	width: 100%;
	margin: 0 0 5px;
	border: transparent;
	border-radius: 5px;
	padding: 14px 20px;
	font-weight: 500;

	@media (min-width: 768px) {
		width: 75%;
		margin: 0 24px 0 0;
		border-radius: 10px;
		padding: 16px 24px;
		flex-grow: 7;
	}
`;

export const Button = styled.button`
	padding: 12px 32px;
	font-size: 18px;
	cursor: pointer;
	font-weight: 700;
	color: ${(props) => (props.primary ? '#fff' : props.theme.grayishViolet)};
	background-color: ${(props) => (props.primary ? props.theme.cyan : '#fff')};
	border: 0;
	border-radius: 7px;
	text-decoration: none;
	text-transform: capitalize;
	flex-grow: 1;

	&:hover {
		background-color: ${(props) =>
			props.primary ? props.theme.lightCyan : '#fff'};
	}

	@media (min-width: 768px) {
		padding: 10px 18px;
		border-radius: 10px;
		font-size: 16px;
	}

	@media (min-width: 1150px) {
		padding: 10px 32px;
		font-size: 18px;
	}
`;

export const Warning = styled.p`
	width: 100%;
	color: ${(props) => props.theme.red};
	font-style: italic;
	font-size: 16px;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const WarningMobile = styled.p`
	width: 100%;
	color: ${(props) => props.theme.red};
	font-style: italic;
	font-size: 16px;
	display: block;
	margin: 0 0 10px;

	@media (min-width: 768px) {
		display: none;
	}
`;
