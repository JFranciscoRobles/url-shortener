import { Card, Container, Grid, Text } from "@nextui-org/react";
import React from "react";

function Footer() {
	return (
		<Container css={{p:0}} fluid>
			<Card css={{borderRadius:0, }}>
				<Card.Body>
					<Grid.Container >
						<Grid justify="center" xs={12}>
							<Text css={{fontSize:"$xl2"}} b>Hashnode x PlanetScale Hackathon</Text>
						</Grid>
						<Grid justify="center" xs={12}>
							<Text css={{fontSize:"$lg"}}>Build an Open Source app with PlanetScale in July</Text>
						</Grid>
					</Grid.Container>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Footer;