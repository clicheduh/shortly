import React from 'react';
import {
	Wrapper,
	LeftSide,
	Link,
	RightSide,
	ShortenedLink,
	Button
} from './component-styles/ShortenedLinkItemStyles';

const ShortenedLinkItem = () => {
	return (
		<Wrapper>
			<Link>https://www.frontendmentor.io</Link>
			<RightSide>
				<ShortenedLink>https://rel.ink/k4lKyk</ShortenedLink>
				<Button primary>Copy</Button>
			</RightSide>
		</Wrapper>
	);
};

export default ShortenedLinkItem;
