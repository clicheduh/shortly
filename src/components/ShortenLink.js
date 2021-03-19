import React from 'react';
import {
	Wrapper,
	InputDiv,
	Input,
	Button,
	Warning,
	OuterDiv
} from './component-styles/ShortenLinkStyles';
import ShortenedLinkItem from './ShortenedLinkItem';

const ShortenLink = () => {
	return (
		<OuterDiv>
			<Wrapper>
				<InputDiv>
					<Input></Input>
					<Button primary>Shorten it!</Button>
					<br />
				</InputDiv>
				<Warning>Please add a link</Warning>
			</Wrapper>
			<ShortenedLinkItem />
			<ShortenedLinkItem />
			<ShortenedLinkItem />
			<ShortenedLinkItem />
		</OuterDiv>
	);
};

export default ShortenLink;
