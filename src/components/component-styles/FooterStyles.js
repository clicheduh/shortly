// This file contains the styles of Footer Component

import styled from 'styled-components';

export const OuterDiv = styled.div`
	background-color: ${(props) => props.theme.veryDarkViolet};
	width: 100%;
	height: fit-content;
	padding: 70px 0 50px;
`;

export const Wrapper = styled.div`
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	flex-flow: column;
	flex-wrap: wrap;

	@media (min-width: 576px) {
	}

	@media (min-width: 768px) {
		max-width: 85%;
		text-align: left;
		flex-flow: row;
	}

	@media (min-width: 1024px) {
		max-width: 75%;
	}
`;

export const LogoColumn = styled.div`
	width: 100%;
	text-align: center;
	margin: 0 0 50px;

	@media (min-width: 768px) {
		width: 30%;
		text-align: left;
		margin: 0;
	}
`;

export const Logo = styled.svg`
	width: 121px;
`;

export const LogoPath = styled.path`
	fill: #fff;
`;

export const FooterNavColumn = styled.div`
	width: 100%;
	text-align: center;
	margin: 0 0 30px;

	@media (min-width: 768px) {
		width: 16.66%;
		text-align: left;
		margin: 0;
	}
`;

export const Heading = styled.h4`
	font-weight: 700;
	color: #fff;
	margin: 0 0 20px;

	@media (min-width: 768px) {
		margin: 0 0 25px;
	}
`;

export const UnorderedList = styled.ul`
	list-style-type: none;
`;

export const Link = styled.li`
	font-weight: 500;
	font-size: 16px;
	text-transform: capitalize;
	margin: 0 0 10px 0;
	color: ${(props) => props.theme.grayishViolet};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.cyan};
	}
`;

export const SocialsColumn = styled.div`
	width: 100%;
	text-align: center;

	@media (min-width: 768px) {
		width: 20%;
		text-align: left;
	}
`;

export const Social = styled.svg`
	width: 25px;
	margin: 20px 12px 8px;
	cursor: pointer;

	@media (min-width: 768px) {
		margin: 0 20px 0 0;
	}
`;

export const SocialPath = styled.path`
	fill: #fff;

	&:hover {
		fill: ${(props) => props.theme.cyan};
	}
`;
