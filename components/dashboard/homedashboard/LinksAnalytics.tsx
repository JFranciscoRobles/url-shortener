import { Card, Container, Grid, Text } from "@nextui-org/react";
import React from "react";
import SectionTitle from "../SectionTitle";

function LinksAnalytics() {
	return (
		<Card css={{p:"$md"}}> 	
			<Container css={{p:4}}>
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
			</Container>
		</Card>
	);
}

export default LinksAnalytics;