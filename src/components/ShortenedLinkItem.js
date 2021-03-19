import React from 'react';
import {
	Wrapper,
	Link,
	HorizontalLine,
	RightSide,
	ShortenedLink,
	Button
} from './component-styles/ShortenedLinkItemStyles';

const ShortenedLinkItem = () => {
	return (
		<Wrapper>
			<Link>https://www.frontendmentor.io/fortheloveofgod</Link>
			<HorizontalLine></HorizontalLine>
			<RightSide>
				<ShortenedLink>https://rel.ink/k4lKyk</ShortenedLink>
				<Button primary>Copy</Button>
			</RightSide>
		</Wrapper>
	);
};

export default ShortenedLinkItem;
