// This file contains the styles of Navbar Component

import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
	max-width: 85%;
	margin-left: auto;
	margin-right: auto;
	padding: 10px 0 0;
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

export const Logo = styled.svg`
	padding-left: 0 !important;
	margin: 12px 20px 0 0;
`;

export const LogoPath = styled.path`
	fill: ${(props) => props.theme.veryDarkViolet};
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
		color: ${(props) => props.theme.veryDarkBlue};
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

export const Anchor = styled.a``;

export const Hamburger = styled.i``;
