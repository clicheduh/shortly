import React from 'react';
import {
	NavbarWrapper,
	LeftWrapper,
	RightWrapper,
	Navlink,
	Logo,
	Button
} from './component-styles/NavbarStyles';
import '../css/navbarStyles.css';

const Navbar = () => {
	return (
		<NavbarWrapper className="topnav" id="myTopnav">
			<LeftWrapper id="left-nav-links">
				<Logo as="a" href="/" className="logo">
					Shortly
				</Logo>
				<Navlink as="a" href="/">
					Features
				</Navlink>
				<Navlink as="a" href="/">
					Pricing
				</Navlink>
				<Navlink as="a" href="/">
					Resources
				</Navlink>
			</LeftWrapper>
			<RightWrapper>
				<Navlink as="a" href="/">
					Login
				</Navlink>
				<Button primary as="a" href="/">
					Sign Up
				</Button>
			</RightWrapper>
			<a
				href="javascript:void(0);"
				className="icon"
				onclick="myFunction()"
			>
				<i
					className="fa fa-bars"
					style={{ color: '#9e9aa7', margin: '5px 0' }}
				></i>
			</a>
		</NavbarWrapper>
	);
};

export default Navbar;
