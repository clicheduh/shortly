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
			<Link>{myData.result.original_link}</Link>
			<HorizontalLine></HorizontalLine>
			<RightSide>
				<ShortenedLink>{myData.result.short_link}</ShortenedLink>
				<Button primary>Copy</Button>
			</RightSide>
		</Wrapper>
	);
};

export default ShortenedLinkItem;
