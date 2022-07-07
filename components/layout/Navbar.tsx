import { Container, Grid, Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import ToggleLanguage from "../system/i18n/ToggleLanguage";
import ToggleTheme from "../system/ToggleTheme";

function Navbar() {
	return (
		<Container css={{p:8}}>
			<Grid.Container>
				<Grid xs={6}>
					<NextLink href={"/"} passHref>
						<Link>
							<Text size={20} b>HPSURL</Text>
						</Link>
					</NextLink>
				</Grid>
				<Grid xs={6} justify={"flex-end"}>
					<ToggleTheme />
					<ToggleLanguage/>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Navbar;