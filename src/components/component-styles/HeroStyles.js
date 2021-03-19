// This file contains the styles of Hero Component

import styled from 'styled-components';

export const OutWrapper = styled.div`
	width: 100%;
	height: fit-content;
	overflow: hidden;
	margin: 0 0 150px;
`;

export const Wrapper = styled.div`
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-flow: column-reverse;
	height: fit-content;
	overflow: visible;
	position: absolute;
	top: 15%;
	left: 0;
	right: 0;

	@media (min-width: 576px) {
		top: 20%;
	}

	@media (min-width: 768px) {
		max-width: 85%;
		margin: 50px auto 0;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		position: relative;
		top: %;
		left: 0;
	}

	@media (min-width: 1024px) {
		margin: 40px auto 0;
		max-width: 75%;
		align-items: center;
		flex-wrap: wrap;
	}
`;

export const TextWrapper = styled.div`
	display: block;
	margin: 0 auto;
`;

export const HeroTextDiv = styled.div`
	width: 100%;
	text-align: center;

	@media (min-width: 768px) {
		width: 55%;
		padding-right: 5rem;
		text-align: left;
	}
`;

export const Heading = styled.h1`
	font-weight: 700;
	margin: 0 0 15px;
	font-size: 8.5vw;
	line-height: 9.5vw;
	letter-spacing: -1px;
	color: ${(props) => props.theme.veryDarkBlue};

	@media (min-width: 576px) {
		font-size: 6.5vw;
		line-height: 7.5vw;
	}

	@media (min-width: 768px) {
		font-size: 5vw;
		line-height: 6vw;
	}

	@media (min-width: 1024px) {
		font-size: 4.5vw;
		line-height: 5vw;
	}
`;

export const Subheading = styled.h3`
	font-weight: 500;
	font-size: 14px;
	margin: 0 30px 30px;
	color: ${(props) => props.theme.grayishViolet};

	@media (min-width: 576px) {
		font-size: 16px;
		margin: 0 0 30px;
		padding: 0 50px;
	}

	@media (min-width: 768px) {
		padding: 0;
	}

	@media (min-width: 1024px) {
		font-size: 18px;
		margin: 0 0 40px;
	}
`;

export const Button = styled.button`
	padding: 10px 26px;
	font-size: 14px;
	cursor: pointer;
	font-weight: 500;
	color: ${(props) => (props.primary ? '#fff' : props.theme.grayishViolet)};
	background-color: ${(props) => (props.primary ? props.theme.cyan : '#fff')};
	border: 0;
	border-radius: 40px;
	text-decoration: none;
	text-transform: capitalize;

	&:hover {
		background-color: ${(props) =>
			props.primary ? props.theme.lightCyan : '#fff'};
	}

	@media (min-width: 1024px) {
		font-size: 16px;
	}
`;

export const HeroImageDiv = styled.div`
	width: 100%;
	text-align: center;
	margin: 0 auto 35px;
	overflow: hidden;
	position: relative;

	@media (min-width: 768px) {
		width: 45%;
		margin: 0;
		overflow: visible;
	}
`;

export const HeroImage = styled.img`
	width: 350px;
	margin-left: 20px;
	positon: absolute;
	left: 0;
	top: 0;

	@media (min-width: 576px) {
		width: 400px;
		margin-left: 0;
	}

	@media (min-width: 768px) {
		width: 53vw;
		margin-left: 0;
	}
`;
