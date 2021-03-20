import React from 'react';
import {
	Wrapper,
	Link,
	HorizontalLine,
	RightSide,
	ShortenedLink,
	Button
} from './component-styles/ShortenedLinkItemStyles';

const ShortenedLinkItem = (props) => {
	const { myData } = props;

	return (
		<Wrapper>
			<Link>{myData.link}</Link>
			<HorizontalLine></HorizontalLine>
			<RightSide>
				<ShortenedLink>{myData.short_link}</ShortenedLink>
				<Button primary>Copy</Button>
			</RightSide>
		</Wrapper>
	);
};

export default ShortenedLinkItem;
