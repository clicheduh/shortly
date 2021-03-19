import React from 'react';
import {
	OuterDiv,
	Wrapper,
	Heading,
	Subheading,
	Cards,
	Line,
	MobileLine,
	Card,
	CardImage,
	CardHeading,
	CardText,
	ImageDiv
} from './component-styles/AdvStatisticsStyles';
import ShortenLink from './ShortenLink';

const imageRoot = process.env.PUBLIC_URL + '/images';

const AdvStatistics = () => {
	return (
		<OuterDiv>
			<ShortenLink />
			<Wrapper>
				<Heading>Advanced Statistics</Heading>
				<Subheading>
					Track how your links are performing across the web with our
					advanced statistics dashboard
				</Subheading>
				<Cards>
					<Line></Line>
					<MobileLine></MobileLine>
					<Card number="first">
						<ImageDiv>
							<CardImage
								src={imageRoot + '/icon-brand-recognition.svg'}
								alt="hero-image"
							></CardImage>
						</ImageDiv>
						<CardHeading>Brand recognition</CardHeading>
						<CardText>
							Boost your brand recognition with each click.
							Generic links don't mean a thin. Branded links helps
							instil confidence in your content.
						</CardText>
					</Card>
					<Card number="second">
						<ImageDiv>
							<CardImage
								src={imageRoot + '/icon-detailed-records.svg'}
								alt="hero-image"
							></CardImage>
						</ImageDiv>
						<CardHeading>Detailed records</CardHeading>
						<CardText>
							Gain insights into who is clicking your links.
							Knowing when and where people engage with your
							content helps inform better decisions.
						</CardText>
					</Card>
					<Card number="third">
						<ImageDiv>
							<CardImage
								src={imageRoot + '/icon-fully-customizable.svg'}
								alt="hero-image"
							></CardImage>
						</ImageDiv>
						<CardHeading>Fully customizable</CardHeading>
						<CardText>
							Improve brand awareness and content dicoverability
							through customizable links, supercharging audience
							engagement.
						</CardText>
					</Card>
				</Cards>
			</Wrapper>
		</OuterDiv>
	);
};

export default AdvStatistics;
