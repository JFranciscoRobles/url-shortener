import { Container, FormElement, Grid, Input, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { ChangeEvent } from "react";
import { useLanguage } from "../system/i18n/useLanguage";

const QrComponent = dynamic(() => import("@/components/qr/QrComponent"), {
	ssr: false,
});

function Header() {
    
	const [qrText, setQrText] = React.useState("https://hpsurl-shortener.vercel.app/es");
	const [bgColor, setBgColor] = React.useState("#f6f6f6");
	const [dotsColor, setDotsColor] = React.useState("black");

	const {text} = useLanguage();

	const onUrlChange = (e:ChangeEvent<FormElement>) => {
		setQrText(e.target.value);
	};

	const onBgColorChange = (e:ChangeEvent<FormElement>) => {
		setBgColor(e.target.value);
	};

	const onDotsColorChange = (e:ChangeEvent<FormElement>) => {
		setDotsColor(e.target.value);
	};
    
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
						<Grid xs={12}>								
							<Input  css={{w:"100%"}} labelLeft="Your Link" size="lg"  type={"text"} value={qrText}  onChange={onUrlChange}/>
						</Grid>
					</Grid.Container>
				</Grid>
				<Grid css={{height:"fit-content"}} justify="center" md={6} xs={12}>
					<motion.div
						transition={{ duration: 2}}
						whileHover={{ y: [0, -20, 0] }}
					>
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
							<Grid justify="center" xs={12}>
								<Input css={{w:"100%"}} initialValue={bgColor} labelLeft="BgColor"  size="lg" type={"color"}  onChange={onBgColorChange}/>
							</Grid>
							<Grid justify="center" xs={12}>
								<Input css={{w:"100%"}} initialValue={dotsColor} labelLeft="DtColor"  size="lg" type={"color"}  onChange={onDotsColorChange}/>
							</Grid>
						</Grid.Container>
					</motion.div>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default Header;