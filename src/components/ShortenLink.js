import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
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
	let baseUrl =
		'https://api.shrtco.de/v2/shorten?url=https://github.com/VedantBang/ArtsnDecoWebsite';
	const [myData, setData] = useState(null);
	const [clickChecker, changeClickState] = useState(false);

	// working
	// const changeHandler = (e) => {
	// 	setData({
	// 		...myData,
	// 		[e.target.name]: e.target.value
	// 	});
	// };

	useEffect(() => {
		axios.get(baseUrl).then((res) => {
			setData(res.data);
		});
	}, [baseUrl]);

	let content = null;

	if (myData) {
		content = <ShortenedLinkItem myData={myData} />;
	} else {
		content = <Loader></Loader>;
	}

	return (
		<OuterDiv>
			<Wrapper>
				<InputDiv>
					<Input name="link"></Input>
					{/* <Input name="link"></Input> */}
					<WarningMobile>Please add a link</WarningMobile>
					<Button primary>Shorten it!</Button>
				</InputDiv>
				<Warning>Please add a link</Warning>
			</Wrapper>
			{content}
		</OuterDiv>
	);
};

export default ShortenLink;
