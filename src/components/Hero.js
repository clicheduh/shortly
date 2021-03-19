import React from 'react';
import {
	Wrapper,
	TextWrapper,
	HeroTextDiv,
	Heading,
	Subheading,
	Button,
	HeroImageDiv,
	HeroImage,
	OutWrapper
} from './component-styles/HeroStyles';

const imageRoot = process.env.PUBLIC_URL + '/images';

const Hero = () => {
	return (
		<OutWrapper>
			<Wrapper>
				<HeroTextDiv>
					<TextWrapper>
						<Heading>
							More than just <br /> shorter links
						</Heading>
						<Subheading>
							Build your brand's recognition and get detailed
							insights on how your links are performing
						</Subheading>
						<Button primary>Get Started</Button>
					</TextWrapper>
				</HeroTextDiv>
				<HeroImageDiv>
					<HeroImage
						src={imageRoot + '/illustration-working.svg'}
						alt="hero-image"
					></HeroImage>
				</HeroImageDiv>
			</Wrapper>
		</OutWrapper>
	);
};

export default Hero;
