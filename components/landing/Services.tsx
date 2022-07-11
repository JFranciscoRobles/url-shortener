import { Card, Container, Grid, Text, styled } from "@nextui-org/react";
import React from "react";

function Services() {
	return (
		<Container>
			<Grid.Container gap={2}>
				{servicesData.map((service, index) => (
					<Grid key={`${service.title}-A${index}`} sm={4} xs={12}>
						<Card css={{p:2}}>
							<Card.Header>
								<Text css={{textAlign:"center", w:"100%"}} h2>{service.title}</Text>
							</Card.Header>
							<Card.Body>
								<StyledUl>
									{
										service.items.map((item, index) => ( <StyledLi key={`${item.title}-L${index}`}>{item.title}</StyledLi> ))
									}
								</StyledUl>
							</Card.Body>
						</Card>
					</Grid>
				))}
			
			</Grid.Container>
		</Container>
	);
}

export default Services;

const StyledUl = styled("ul", {
	listStyle: "number",
	listStylePosition: "inside",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
});

const StyledLi = styled("li", {
	w:"100%",
	fontSize: "$lg",
});

type Service = {
	title: string;
	image:string;
	items: {
		title: string;
	}[];
}

const servicesData:Service[] = [
	{
		title: "URL Shortener",
		image: "URL Shortener.",
		items: [{
			title: "Links Click sin limite.",
		},
		{
			title: "Links sin limite.",
		},
		{
			title: "Custom Back-Halves.",
		},
		{
			title: "Link Redirects.",
		},
		{
			title: "Config Meta title and meta description.",
		}]
	},
	{
		title: "QR Generator",
		image: "QR Generator",
		items: [{
			title: "QRs sin Limite.",
		},
		{
			title: "Custom QR Style.",
		},
		{
			title: "Sin Publicidad.",
		},
		{
			title: "Redirecciónes rapidas.",
		},
		{
			title: "Qrs con Logos.",
		},
		{
			title: "Multiple Download Formats.",
		}]
	},
	{
		title: "Analytics",
		image: "https://image.shutterstock.com/image-vector/political-map-world-country-names-260nw-753854866.jpg",
		items: [{
			title: "Device Tracking.",
		},
		{
			title: "Location Citie Level Tracking.",
		},
		{
			title: "Total Click Counts.",
		},
		{
			title: "Link History.",
		}]
	}
];