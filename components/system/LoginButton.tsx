import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { useLanguage } from "./i18n/useLanguage";

function LoginButton():JSX.Element {
	const { data: session } = useSession();
	const {text} = useLanguage();
	
	if (session) {
		return (
			<Button light onClick={() => signOut()}>{text.login.signOut}</Button>
		);
	}
	return (
		<Button onClick={() => signIn()}>{text.login.signIn}</Button>
	);
}

export default LoginButton;