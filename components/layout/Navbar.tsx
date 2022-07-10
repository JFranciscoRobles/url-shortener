import { Button, Container, Grid, Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import ToggleLanguage from "../system/i18n/ToggleLanguage";
import { useLanguage } from "../system/i18n/useLanguage";
import ToggleTheme from "../system/ToggleTheme";

function Navbar() {

	const {text} = useLanguage();
	
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
					<Button size="md" auto >
						<NextLink href={"/login"} passHref>
							<Link>
								<Text color="white" css={{letterSpacing:"$wider"}} size={16} transform="uppercase" b>{text.login.button}</Text>
							</Link>
						</NextLink>
					</Button>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Navbar;