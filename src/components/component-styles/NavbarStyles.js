// This file contains the styles of Navbar Component

import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
	max-width: 85%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 1024px) {
		max-width: 75%;
	}
`;

export const LeftWrapper = styled.div`
	display: inline-flex;
`;

export const RightWrapper = styled.div`
	display: inline-flex;
`;

export const Logo = styled.span`
	font-size: 28px;
	color: ${(props) => props.theme.darkViolet};
	font-weight: 700;
	padding-left: 0 !important;
	margin-right: 10px;
`;

export const Navlink = styled.li`
	margin-top: auto;
	margin-bottom: auto;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	text-decoration: none;
	color: ${(props) => props.theme.grayishViolet};

	&:hover {
		color: ${(props) => props.theme.darkViolet};
	}
`;

export const Button = styled.button`
	padding: 9px 23px;
	margin: 0 0 0 25px;
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
`;
