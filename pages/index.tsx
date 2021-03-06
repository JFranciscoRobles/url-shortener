import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/landing/Header";
import Services from "@/components/landing/Services";

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>URL Shortener</title>
				<meta content="Generated by create next app" name="description" />
				<link href="/favicon.ico" rel="icon" />
			</Head>
			<Header/>
			<Services/>
			
		</>
	);
};

export default Home;
