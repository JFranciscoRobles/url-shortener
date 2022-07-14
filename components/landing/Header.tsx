import { Container,  Grid,  Text } from "@nextui-org/react";
import React from "react";
import { useLanguage } from "../system/i18n/useLanguage";

function Header():JSX.Element {

	const {text} = useLanguage();
    
	return (
		<Container>
			<Grid.Container alignContent="center"  css={{ minHeight:"80vh"}}  gap={2} justify="center" >
				<Grid css={{height:"fit-content"}}  justify="center" md={6} xs={12}>
					<Grid.Container  gap={2}>
						<Grid xs={12}>
							<Text css={{ lineHeight: "$xs"}} h1>{text.home.title}</Text>
						</Grid>
						<Grid xs={12}>								
							<Text css={{fontSize: "$xl2", lineHeight: "$sm"}} >{text.home.description}</Text>
						</Grid>
					
					</Grid.Container>
				</Grid>
				<Grid css={{height:"fit-content"}} justify="center" md={6} xs={12}>
					
					<Grid.Container  gap={1}>
					
					</Grid.Container>
					
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Header;