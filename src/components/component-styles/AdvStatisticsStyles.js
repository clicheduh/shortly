// This file contains the styles of AdvStatistics Component

import styled from 'styled-components';

export const OuterDiv = styled.div`
	background-color: ${(props) => props.theme.gray};
	width: 100%;
	height: fit-content;
	padding: 0 0 100px;
	margin: 700px 0 0;
`;

export const Wrapper = styled.div`
	max-width: 90%;
	margin: 0 auto -75px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-flow: column;

	@media (min-width: 768px) {
		max-width: 75%;
		margin: 0 auto;
	}
`;

export const Heading = styled.h1`
	text-align: center;
	color: ${(props) => props.theme.veryDarkBlue};
	font-weight: 700;
	margin: 0 auto 16px;
	font-size: 1.6rem;
	line-height: 42px;

	@media (min-width: 768px) {
		margin: 0 auto;
		font-size: 2rem;
		line-height: auto;
	}
`;

export const Subheading = styled.h3`
	font-weight: 500;
	font-size: 14px;
	margin: 0 10px 80px;
	text-align: center;
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
	flex-flow: column;
	align-content: center;
	justify-content: space-between;
	background-color: transparent;
	width: 100%;
	height: fit-content;
	position: relative;

	@media (min-width: 768px) {
		flex-flow: row;
	}
`;

export const Line = styled.div`
	width: 100%;
	height: 8px;
	background-color: ${(props) => props.theme.cyan};
	position: absolute;
	top: 120px;
	z-index: 0;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const MobileLine = styled.div`
	width: 8px;
	height: 70%;
	background-color: ${(props) => props.theme.cyan};
	position: absolute;
	top: 120px;
	left: 50%;
	z-index: 0;
	display: block;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const Card = styled.div`
	background-color: #fff;
	margin: 0 0 75px;
	width: 100%;
	height: 230px;
	padding: 70px 26px 35px;
	border-radius: 5px;
	position: relative;

	@media (min-width: 768px) {
		width: 350px;
		margin: 0;

		${(props) => {
			switch (props.number) {
				case 'first':
					return 'margin: 0;';
				case 'second':
					return 'margin: 30px 0 0;';
				case 'third':
					return 'margin: 60px 0 0;';
			}
		}}
	}
`;

export const ImageDiv = styled.div`
	width: 85px;
	height: 85px;
	position: absolute;
	top: -18%;
	left: 38.5%;
	border-radius: 50%;
	border: transparent;
	background-color: ${(props) => props.theme.darkViolet};

	@media (min-width: 768px) {
		width: 80px;
		height: 80px;
		position: absolute;
		top: -15%;
		left: 8%;
		border-radius: 50%;
		border: transparent;
		background-color: ${(props) => props.theme.darkViolet};
	}
`;

export const CardImage = styled.img`
	width: 38px;
	position: absolute;
	top: 29%;
	left: 28%;
	right: 24%;

	@media (min-width: 768px) {
		width: 35px;
	}
`;

export const CardHeading = styled.h4`
	text-align: center;
	margin: 0 0 13px 0;
	color: ${(props) => props.theme.veryDarkBlue};
	font-weight: 700;
	font-size: 18px;
	text-transform: capitalize;

	@media (min-width: 768px) {
		text-align: left;
		font-size: 20px;
	}
`;

export const CardText = styled.p`
	text-align: center;
	color: ${(props) => props.theme.grayishViolet};
	font-weight: 500;
	font-size: 15px;

	@media (min-width: 768px) {
		text-align: left;
		font-size: 16px;
	}
`;
