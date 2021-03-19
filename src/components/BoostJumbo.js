import React from 'react';
import { Wrapper, Heading, Button } from './component-styles/BoostJumboStyles';

const BoostJumbo = () => {
	return (
		<Wrapper>
			<Heading>Boost your links today</Heading>
			<Button primary as="a">
				Get Started
			</Button>
		</Wrapper>
	);
};

export default BoostJumbo;
