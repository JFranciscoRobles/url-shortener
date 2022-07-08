import React from "react";
import type { AppProps } from "next/app";
import { NextUIProvider }  from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, lightTheme } from "@/utils/themes";

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
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default MyApp;
