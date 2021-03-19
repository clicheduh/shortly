import React from 'react';
import {
	Wrapper,
	Logo,
	Features,
	Resources,
	Company,
	Link,
	Socials,
	Social,
	Heading
} from './component-styles/FooterStyles';

const imageRoot = process.env.PUBLIC_URL + '/images';

const Footer = () => {
	return (
		<Wrapper>
			<Logo src={imageRoot + '/logo.svg'}></Logo>
			<FooterNav>
				<Heading>Features</Heading>
				<ul>
					<Link>Link shortening</Link>
					<Link>Branded links</Link>
					<Link>Analytics</Link>
				</ul>
			</FooterNav>
			<FooterNav>
				<Heading>Resources</Heading>
				<ul>
					<Link>Blog</Link>
					<Link>Developers</Link>
					<Link>Support</Link>
				</ul>
			</FooterNav>
			<FooterNav>
				<Heading>Resources</Heading>
				<ul>
					<Link>About</Link>
					<Link>Our team</Link>
					<Link>Careers</Link>
					<Link>Contact</Link>
				</ul>
			</FooterNav>
			<Socials>
				<Social src={imageRoot + '/icon-facebook.svg'}></Social>
				<Social src={imageRoot + '/icon-twitter.svg'}></Social>
				<Social src={imageRoot + '/icon-pinterest.svg'}></Social>
				<Social src={imageRoot + '/icon-instagram.svg'}></Social>
			</Socials>
		</Wrapper>
	);
};

export default Footer;
