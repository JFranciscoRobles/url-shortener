import { Card, Container, Grid, Text } from "@nextui-org/react";
import React from "react";

function Services() {
	return (
		<Container>
			<Grid.Container gap={2}>
				<Grid sm={4} xs={12}>
					<Card>
						<Card.Header>
							<Text h3>URL Shortener</Text>
						</Card.Header>
						<Card.Body>
							<ul>
								<li>Links sin limite.</li>
								<li>Redirecciónes sin perder el link.</li>
							</ul>
						</Card.Body>
					</Card>
				</Grid>
				<Grid sm={4} xs={12}>
					<Card>
						<Card.Header>
							<Text h3>QR Generator</Text>
						</Card.Header>
						<Card.Body>
							<ul>
								<li>Links sin limite.</li>
								<li>Redirecciónes sin perder el link.</li>
							</ul>
						</Card.Body>
					</Card>
				</Grid>
				<Grid sm={4} xs={12}>
					<Card>
						<Card.Header>
							<Text h3>Analytics</Text>
						</Card.Header>
						<Card.Body>
							<ul>
								<li>Links sin limite.</li>
								<li>Redirecciónes sin perder el link.</li>
							</ul>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Services;