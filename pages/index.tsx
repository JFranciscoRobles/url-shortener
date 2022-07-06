import React from "react";
import { Button, Col, Container,  Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import ToggleTheme from "@/components/system/ToggleTheme";
import ToggleLanguage from "@/components/system/i18n/ToggleLanguage";
import { useLanguage } from "@/components/system/i18n/useLanguage";

const Home: NextPage = () => {

	const {text} = useLanguage();

	return (
		<>
			<Head>
				<title>URL Shortener</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Col>
					<Row justify="center">
						<Text h1>URL Shortener</Text>
					</Row>
					<Row justify="center">
						<ToggleTheme />
						<ToggleLanguage/>
					</Row>
				
					<Row justify="center">
						<Text h2>{text.welcome__message}</Text>
					</Row>
					<Row justify="center">
						<Button>Primary</Button>
					</Row>
				</Col>
			</Container>
		</>
	);
};

export default Home;
