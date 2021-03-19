// This file contains the styles of ShortenedLinkItem Component

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 0 20px;
	padding: 15px 0;
	border-radius: 7px;
	border: transparent;
	background-color: #fff;
	display: flex;
	flex-flow: column;
	align-content: middle;
	justify-content: space-between;

	@media (min-width: 768px) {
		padding: 25px 30px 20px 25px;
		flex-flow: row;
	}
`;

// export const LeftSide = styled.div`
// 	width: 60%;
// 	text-align: left;
// `;

export const Link = styled.p`
	margin-top: auto;
	margin-bottom: auto;
	padding: 0 16px 12px;
	color: ${(props) => props.theme.darkViolet};
	font-weight: 500;
	font-size: 18px;

	@media (min-width: 768px) {
		padding: 0 20px;
	}
`;

export const HorizontalLine = styled.hr`
	display: block;
	width: 100%;
	height: 0.5px;
	background-color: ${(props) => props.theme.gray};

	@media (min-width: 768px) {
		display: none;
	}
`;

export const RightSide = styled.div`
	width: 100%;
	text-align: left;
	padding: 12px 16px 0;
	display: flex;
	flex-flow: column;

	@media (min-width: 768px) {
		width: 40%;
		text-align: right;
		padding: 0;
		display: block;
	}
`;

export const ShortenedLink = styled.a`
	margin: 0 0 15px;
	color: ${(props) => props.theme.cyan};
	font-weight: 500;
	font-size: 18px;
	text-decoration: none;

	@media (min-width: 768px) {
		margin: 0;
	}
`;

export const Button = styled.button`
	margin: 0;
	padding: 11px 30px;
	font-size: 16px;
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

	@media (min-width: 768px) {
		margin: 10px 0 0 18px;
		padding: 11px 30px;
		font-size: 14px;
	}

	@media (min-width: 1100px) {
		margin: 0 0 0 18px;
		padding: 11px 30px;
		font-size: 14px;
	}
`;
