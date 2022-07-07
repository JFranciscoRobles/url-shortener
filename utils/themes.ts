import {createTheme} from "@nextui-org/react";

export const lightTheme = createTheme({
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

export const darkTheme = createTheme({
	type: "dark",
});
