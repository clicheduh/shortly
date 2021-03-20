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
			<Link>{myData ? myData.result.original_link : null}</Link>
			<HorizontalLine></HorizontalLine>
			<RightSide>
				<ShortenedLink>
					{myData ? myData.result.short_link : null}
				</ShortenedLink>
				<Button
					primary
					onClick={() => {
						navigator.clipboard.writeText(myData.result.short_link);
					}}
				>
					Copy
				</Button>
			</RightSide>
		</Wrapper>
	);
};

export default ShortenedLinkItem;
