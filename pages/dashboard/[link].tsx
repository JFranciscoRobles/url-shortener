import SectionTitle from "@/components/dashboard/SectionTitle";
import { Container, Grid, Text, Card, Table } from "@nextui-org/react";
import React from "react";

function Link() {
	return (
		<Container css={{p:4}} sm>
			<Grid.Container gap={2}>
				<Grid xs={12}>
					<SectionTitle title="Dashboard / Link" />
				</Grid>
				<Grid xs={12}>
					<Card css={{p:"$md"}}>
				
						<Container css={{p:4}}>
							<SectionTitle title={"Información"}/>
							<Grid.Container css={{textAlign:"center"}} gap={2}>
								<Grid justify="center" sm={4} xs={12}>
									<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >URL NAME<Text>Probien</Text> </Text>
								</Grid>
								<Grid justify="center" sm={4} xs={12}>
									<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >Short URl<Text>www.hpsurl.com/aijfde</Text> </Text>
								</Grid>
								<Grid justify="center" sm={4} xs={12}>
									<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >URL<Text>www.probien.com.mx</Text> </Text>
								</Grid>
							</Grid.Container>
						</Container>
				
					</Card>
				</Grid>

				<Grid xs={12}>
					<Card css={{p:"$md"}}> 	<Container css={{p:4}}>
						<SectionTitle title={"Analitica"}/>
						<Grid.Container css={{textAlign:"center"}} gap={2} >
							<Grid justify="center" sm={3} xs={12}>
								<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >Clicks<Text>112</Text> </Text>
							</Grid>
							<Grid justify="center"  sm={3} xs={12}>
								<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b > Clicks / Last 30 Days<Text >30</Text> </Text>
							</Grid>
							<Grid justify="center"  sm={3} xs={12}>
								<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >Most Region<Text>MX</Text> </Text>
							</Grid>
							<Grid justify="center" sm={3} xs={12}>
								<Text css={{color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >Most Device<Text>Mobile</Text> </Text>
							</Grid>
						</Grid.Container>
					</Container></Card>
				</Grid>
		
				<Grid justify="center" xs={12}>
					<Card>
						<Table
							aria-label="Links Table"
							css={{
								height: "auto",
								minWidth: "60vw",
						
							}}
							selectionMode="single"
						>
							<Table.Header>
								<Table.Column css={{bgColor:"$accents1"}}>DATE</Table.Column>
								<Table.Column css={{bgColor:"$accents1"}}>IP</Table.Column>
								<Table.Column css={{bgColor:"$accents1"}}>Clicks</Table.Column>
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
					</Card>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Link;

