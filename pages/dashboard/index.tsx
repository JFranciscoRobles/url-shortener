
import { unstable_getServerSession } from "next-auth/next";
import { Button, Card, Container, Grid, Table, Text } from "@nextui-org/react";
import React from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import SectionTitle from "@/components/dashboard/SectionTitle";

function Dashboard():JSX.Element {
	return (
		<Container css={{p:4}} sm>
			<Grid.Container gap={2}>
				<Grid xs={12}>
					<SectionTitle title="Dashboard" />
				</Grid>
				<Grid justify="flex-end" xs={12}>
					<Button size={"sm"}>New Link</Button>
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

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await unstable_getServerSession(context.req, context.res, authOptions);
  
	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
  
	return {
		props: {
			session,
		},
	};
};