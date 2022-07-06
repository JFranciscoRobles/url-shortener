import { Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";


function ToggleLanguage() {
	const { locale } = useRouter();
	const router = useRouter();

	const handleClick = () => {
		router.push("/", "/", { locale: locale === "en" ? "es" : "en" });
	};
  
	return (
		<Button auto light onClick={() => handleClick()}>
			<Text
				size={14}
				css={{ fontWeight: locale === "en" ? "bold" : "normal" }}
			>
      EN
			</Text>
    /
			<Text
				size={14}
				css={{ fontWeight: locale === "es" ? "bold" : "normal" }}
			>
      ES
			</Text>
		</Button>
	);
}

export default ToggleLanguage;