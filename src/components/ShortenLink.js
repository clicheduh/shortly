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
	const [myData, setData] = useState({
		link: '',
		shortlink: ''
	});

	// working
	const changeHandler = (e) => {
		setData({
			...myData,
			[e.target.name]: e.target.value
		});
	};

	const clickHandler = () => {
		console.log(myData);
	};

	useEffect(() => {
		axios.get(baseUrl).then((res) => {
			setData({
				...myData,
				shortlink: res.data.result.short_link
			});
			console.log(res);
		});
	}, [myData.link]);

	let content = null;

	if (myData.link) {
		content = <ShortenedLinkItem myData={myData} />;
	}

	return (
		<OuterDiv>
			<Wrapper>
				<InputDiv>
					<Input onChange={changeHandler} name="link"></Input>
					{/* <Input name="link"></Input> */}
					<WarningMobile>Please add a link</WarningMobile>
					<Button primary onClick={clickHandler}>
						Shorten it!
					</Button>
				</InputDiv>
				<Warning>Please add a link</Warning>
			</Wrapper>
			{content}
		</OuterDiv>
	);
};

export default ShortenLink;
