import React from 'react';

const AdvStatistics = () => {
	return (
		<OuterDiv>
			<Wrapper>
				<Heading>Advanced Statistics</Heading>
				<Subheading>
					Track how your links are performing across the web with our
					advanced statistics dashboard
				</Subheading>
				<Cards>
					<Card>
						<CardImage></CardImage>
						<CardHeading>Brand recognition</CardHeading>
						<CardText>
							Boost your brand recognition with each click.
							Generic links don't mean a thin. Branded links helps
							instil confidence in your content.
						</CardText>
					</Card>
					<Card>
						<CardImage></CardImage>
						<CardHeading>Detailed records</CardHeading>
						<CardText>
							Gain insights into who is clicking your links.
							Knowing when and where people engage with your
							content helps inform better decisions.
						</CardText>
					</Card>
					<Card>
						<CardImage></CardImage>
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
