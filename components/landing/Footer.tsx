import { Card, Container, Grid, Text } from "@nextui-org/react";
import React from "react";

function Footer():JSX.Element {
	return (
		<Container css={{p:0, mt:32}} fluid>
			<Card css={{borderRadius:0, bgColor:"$primary"}}>
				<Card.Body>
					<Grid.Container>
						<Grid justify="center" xs={12} >
							<Text css={{fontSize:"$xl2", color:"$primarySolidContrast"}} b>Hashnode x PlanetScale Hackathon</Text>
						</Grid>
						<Grid justify="center" xs={12}>
							<Text  css={{fontSize:"$lg", color:"$primarySolidContrast"}}>Build an Open Source app with PlanetScale in July</Text>
						</Grid>
					</Grid.Container>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Footer;