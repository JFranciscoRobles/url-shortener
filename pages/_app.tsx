import React from "react";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
	type: "light",
	theme: {
		colors: {
			primary: "black",
			primaryLight: "$gray300",
			primaryLightHover: "$gray400",
			primaryLightActive: "$gray500",
			primaryLightContrast: "$gray700",
			primaryBorder: "$gray600",
			primaryBorderHover: "$gray700",
			primarySolidHover: "$gray800",
			primarySolidContrast: "$white",
			primaryShadow: "$gray600",

			secondary: "$blue600",
			secondaryLight: "$blue200",
			secondaryLightHover: "$blue300",
			secondaryLightActive: "$blue400",
			secondaryLightContrast: "$blue600",
			secondaryBorder: "$blue500",
			secondaryBorderHover: "$blue600",
			secondarySolidHover: "$blue700",
			secondarySolidContrast: "$white",
			secondaryShadow: "$blue500",
		},
	},
});

const darkTheme = createTheme({
	type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<NextUIProvider>
			<NextThemesProvider
				defaultTheme="system"
				attribute="class"
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
