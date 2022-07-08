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
				css={{ fontWeight: locale === "en" ? "bold" : "normal" }}
				size={18}
			>
      EN
			</Text>
    /
			<Text
				css={{ fontWeight: locale === "es" ? "bold" : "normal" }}
				size={18}
			>
      ES
			</Text>
		</Button>
	);
}

export default ToggleLanguage;