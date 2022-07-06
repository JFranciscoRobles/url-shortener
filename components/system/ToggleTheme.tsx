import React from "react";
import { Button, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

function ToggleTheme() {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	return (
		<>
			{!isDark ? (
				<Button
					aria-label="Dark Mode"
					light
					auto
					icon={<BiSun />}
					onClick={() => setTheme("dark")}
				/>
			) : (
				<Button
					aria-label="Light Mode"
					light
					auto
					icon={<BiMoon />}
					onClick={() => setTheme("light")}
				/>
			)}
		</>
	);
}

export default ToggleTheme;
