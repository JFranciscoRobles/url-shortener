import {  Container, Grid, Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import DashboardMenuLink from "../dashboard/DashboardMenuLink";
import ToggleLanguage from "../system/i18n/ToggleLanguage";
import LoginButton from "../system/LoginButton";
import ToggleTheme from "../system/ToggleTheme";

function Navbar():JSX.Element {
	
	return (
		<Container css={{p:8}}>
			<Grid.Container alignContent="center" alignItems="center" justify="center">
				<Grid xs={6}>
					<NextLink href={"/"} passHref>
						<Link>
							<Text size={32} b>HPSURL</Text>
						</Link>
					</NextLink>
				</Grid>
				<Grid alignContent="center" alignItems="center" justify={"flex-end"} xs={6} >
					<ToggleTheme />
					<ToggleLanguage/>
					<DashboardMenuLink />
					<LoginButton/>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Navbar;