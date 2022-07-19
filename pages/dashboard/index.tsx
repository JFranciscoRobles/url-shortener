
import { unstable_getServerSession } from "next-auth/next";
import {  Container, Grid} from "@nextui-org/react";
import React from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import SectionTitle from "@/components/dashboard/SectionTitle";
import LinkListTable from "@/components/dashboard/homedashboard/LinkListTable";
import NewLink from "@/components/dashboard/homedashboard/NewLink";
import LinksAnalytics from "@/components/dashboard/homedashboard/LinksAnalytics";

function Dashboard():JSX.Element {
	return (
		<Container css={{p:4}} sm>
			<Grid.Container gap={2}>
				<Grid xs={10}>
					<SectionTitle title="Dashboard" />
				</Grid>
				<Grid alignContent="center" alignItems="center" justify="center" xs={2}>
					<NewLink/>
				</Grid>
				<Grid xs={12}>
					<LinksAnalytics/>
				</Grid>
				<Grid justify="center" xs={12}>
					<LinkListTable/>
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