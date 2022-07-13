import React from "react";
import { Button, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

function ToggleTheme():JSX.Element {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	return (
		<>
			{!isDark ? (
				<Button
					aria-label="Dark Mode"
					icon={<BiSun size={18} />}
					auto
					light
					onClick={() => setTheme("dark")}
				/>
			) : (
				<Button
					aria-label="Light Mode"
					icon={<BiMoon size={18} />}
					auto
					light
					onClick={() => setTheme("light")}
				/>
			)}
		</>
	);
}

export default ToggleTheme;
