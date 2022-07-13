import { Container, Grid, Text, Card, Table, Button } from "@nextui-org/react";
import React from "react";

function Link() {
	return (
		<Container css={{p:4}} sm>
			<Grid.Container gap={2}>
				<Grid justify="center" xs={12}>
					<Text css={{fontSize:"$xl4"}} b>Link</Text>
				</Grid>
				<Grid justify="flex-end" xs={12}>
					<Button size={"sm"}>New Link</Button>
				</Grid>
				<Grid xs={12}>
					<Card css={{p:"$md"}}>
						<Card.Header css={{ height:"2.75rem", bgColor:"$accents0", pl:"$8", borderRadius:"$md"}}>
							<Text css={{w:"100%", color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >Información</Text>
						</Card.Header>
					</Card>
				</Grid>
				<Grid justify="center" xs={12}>
					<Grid.Container css={{p:4}} gap={2}>
						<Grid justify="center" md={3} xs={12}>
							<Card >
								<Card.Header>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl", fontWeight:"$semibold"}} >Total clicks</Text>
								</Card.Header>
								<Card.Body css={{p:0}}>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl3"}} b>
										4
									</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid justify="center" md={3} xs={12}>
							<Card isHoverable isPressable>
								<Card.Header>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl", fontWeight:"$semibold"}}  >Total clicks / Month</Text>
								</Card.Header>
								<Card.Body css={{p:0}}>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl3"}} b>
										4
									</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid justify="center" md={3} xs={12}>
							<Card isHoverable isPressable>
								<Card.Header>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl", fontWeight:"$semibold"}}  >Most Region</Text>
								</Card.Header>
								<Card.Body css={{p:0}}>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl3"}} b>
										MX
									</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid justify="center" md={3} xs={12}>
							<Card isHoverable isPressable>
								<Card.Header>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl", fontWeight:"$semibold"}}  >Most Device</Text>
								</Card.Header>
								<Card.Body css={{p:0}}>
									<Text css={{textAlign:"center", w:"100%", fontSize:"$xl3"}} b>
										Mobile
									</Text>
								</Card.Body>
							</Card>
						</Grid>
					</Grid.Container>
				</Grid>
				<Grid justify="center" xs={12}>
					<Table
						aria-label="Links Table"
						css={{
							height: "auto",
							minWidth: "60vw",
						}}
						selectionMode="single"
					>
						<Table.Header>
							<Table.Column>DATE</Table.Column>
							<Table.Column>NAME</Table.Column>
							<Table.Column>Clicks</Table.Column>
						</Table.Header>
						<Table.Body>
							<Table.Row key="1">
								<Table.Cell>Tony Reichert</Table.Cell>
								<Table.Cell>CEO</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="2">
								<Table.Cell>Zoey Lang</Table.Cell>
								<Table.Cell>Technical Lead</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="3">
								<Table.Cell>Jane Fisher</Table.Cell>
								<Table.Cell>Senior Developer</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="4">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager	</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="5">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="6">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="7">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="8">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="9">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
							<Table.Row key="10">
								<Table.Cell>William Howard</Table.Cell>
								<Table.Cell>Community Manager</Table.Cell>
								<Table.Cell>2</Table.Cell>
							</Table.Row>
						</Table.Body>
						<Table.Pagination
							align="center"
							rowsPerPage={8}
							noMargin
							shadow
							onPageChange={(page) => console.log({ page })}
						/>
					</Table>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Link;

