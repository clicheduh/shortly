// This file contains the styles of AdvStatistics Component

import styled from 'styled-components';

export const OuterDiv = styled.div`
	background-color: ${(props) => props.theme.gray};
	width: 100%;
	height: fit-content;
	padding: 0 0 100px;
	margin: 700px 0 0;

	@media (min-width: 768px) {
		height: fit-content;
		margin: 0;
	}
`;

export const Wrapper = styled.div`
	max-width: 75%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-flow: column;
`;

export const Heading = styled.h1`
	text-align: center;
	color: ${(props) => props.theme.veryDarkBlue};
	font-weight: 700;
	margin: 0 auto;
	font-size: 2rem;
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
		margin: 0 0 100px;
	}
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-flow: row;
	align-content: center;
	justify-content: space-between;
	background-color: transparent;
	width: 100%;
	height: fit-content;
	position: relative;
`;

export const Card = styled.div`
	background-color: #fff;
	width: 350px;
	height: 230px;
	padding: 70px 26px 35px;
	border-radius: 5px;
	position: relative;
`;

export const ImageDiv = styled.div`
	width: 80px;
	height: 80px;
	position: absolute;
	top: -15%;
	left: 8%;
	border-radius: 50%;
	border: transparent;
	background-color: ${(props) => props.theme.darkViolet};
`;

export const CardImage = styled.img`
	width: 35px;
	position: absolute;
	top: 29%;
	left: 28%;
	right: 24%;
`;

export const CardHeading = styled.h4`
	text-align: left;
	margin: 0 0 13px 0;
	color: ${(props) => props.theme.veryDarkBlue};
	font-weight: 700;
	font-size: 20px;
	text-transform: capitalize;
`;

export const CardText = styled.p`
	text-align: left;
	color: ${(props) => props.theme.grayishViolet};
	font-weight: 500;
	font-size: 16px;
`;

export const Line = styled.div`
	width: 100%;
	height: 8px;
	background-color: ${(props) => props.theme.cyan};
	position: absolute;
	top: 120px;
	z-index: 0;
`;
