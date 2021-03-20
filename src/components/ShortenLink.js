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
	let baseUrl = 'https://api.shrtco.de/v2/shorten?url=';
	const [myData, setData] = useState(null);
	const [link, setLink] = useState(null);
	const [loader, setLoader] = useState(false);
	const [array, setArray] = useState([]);

	const changeHandler = (e) => {
		setLink(e.target.value);
	};

	const clickHandler = () => {
		console.log(link);
		setLoader(true);
		axios.get(baseUrl + link).then((res) => {
			setData(res.data);
			console.log(res.data);

			setArray((prevArr) => [...prevArr, res.data]);
			setLoader(false);
		});
	};

	console.log(array);

	let content = array ? (
		array.map((item) => {
			return <ShortenedLinkItem myData={item}></ShortenedLinkItem>;
		})
	) : loader ? (
		<Loader></Loader>
	) : null;

	return (
		<OuterDiv>
			<Wrapper>
				<InputDiv>
					<Input name="link" onChange={changeHandler}></Input>
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
