import React from 'react';
import { Wrapper, Heading, Button } from './component-styles/JumbotronStyles';

const imageRoot = process.env.PUBLIC_URL + '/images';

const Jumbotron = () => {
	return (
		<Wrapper>
			<Heading>Boost your links today</Heading>
			<Button primary as="a">
				Get Started
			</Button>
		</Wrapper>
	);
};

export default Jumbotron;
