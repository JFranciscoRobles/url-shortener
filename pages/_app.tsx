import React from "react";
import type { AppProps } from "next/app";
import { NextUIProvider }  from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, lightTheme } from "@/utils/themes";
import Navbar from "@/components/layout/Navbar";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import Footer from "@/components/landing/Footer";

function MyApp({ Component, pageProps:{
	session, ...pageProps
}, }: AppProps) {

	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="system"
				value={{
					light: lightTheme.className,
					dark: darkTheme.className,
				}}
			>
				<NextNProgress />
				<SessionProvider session={session}>
					<Navbar/>
					<Component {...pageProps} />
					<Footer/>
				</SessionProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default MyApp;
