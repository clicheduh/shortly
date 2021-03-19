import React from 'react';
import {
	OuterDiv,
	Wrapper,
	InputDiv,
	Input,
	Button,
	Warning,
	WarningMobile
} from './component-styles/ShortenLinkStyles';
import ShortenedLinkItem from './ShortenedLinkItem';

const ShortenLink = () => {
	return (
		<OuterDiv>
			<Wrapper>
				<InputDiv>
					<Input></Input>
					<WarningMobile>Please add a link</WarningMobile>
					<Button primary>Shorten it!</Button>
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
