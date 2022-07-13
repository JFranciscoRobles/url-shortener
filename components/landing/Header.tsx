import { Container,  Grid,  Text } from "@nextui-org/react";
import dynamic from "next/dynamic";
import React from "react";
import { useLanguage } from "../system/i18n/useLanguage";

const QrComponent = dynamic(() => import("@/components/qr/QrComponent"), {
	ssr: false,
});

function Header():JSX.Element {
    
	const qrText = "https://hpsurl-shortener.vercel.app/es";
	const bgColor = "#f6f6f6";
	const dotsColor = "black";

	const {text} = useLanguage();
    
	return (
		<Container>
			<Grid.Container alignContent="center"  css={{ minHeight:"90vh"}}  gap={2} justify="center" >
				<Grid css={{height:"fit-content"}}  justify="center" md={6} xs={12}>
					<Grid.Container  gap={2}>
						<Grid xs={12}>
							<Text css={{ lineHeight: "$xs"}} h1>{text.home.title}</Text>
						</Grid>
						<Grid xs={12}>								
							<Text css={{fontSize: "$xl2", lineHeight: "$sm"}} >{text.home.description}</Text>
						</Grid>
						<Grid xs={12}>								
							<Text color="primary" css={{fontSize:"$xl2", textDecorationLine: "underline"}} b>{qrText}</Text>
						</Grid>
					</Grid.Container>
				</Grid>
				<Grid css={{height:"fit-content"}} justify="center" md={6} xs={12}>
					
					<Grid.Container  gap={1}>
						<Grid justify="center" xs={12}>
							<Text css={{ lineHeight: "$xs", fontSize:"$xl4", textAlign:"center", fontWeight:"$bold"}}>{text.home.newlink}</Text>
						</Grid>
						<Grid justify="center" xs={12}>
							<Text color="primary" size={20} transform="uppercase" b>https://hpsurl/GIOJRS01</Text>
						</Grid>
						<Grid justify="center" xs={12}>						
							<QrComponent bgColor={bgColor} data={qrText} fgColor={dotsColor} height={200} margin={10} width={200}/>
						</Grid>	
					</Grid.Container>
					
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Header;