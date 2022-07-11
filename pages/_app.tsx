import React from "react";
import type { AppProps } from "next/app";
import { NextUIProvider }  from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, lightTheme } from "@/utils/themes";
import Navbar from "@/components/layout/Navbar";

function MyApp({ Component, pageProps }: AppProps) {

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
				<Navbar/>
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default MyApp;
