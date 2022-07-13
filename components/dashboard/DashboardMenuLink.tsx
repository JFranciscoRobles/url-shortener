import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React from "react";

function DashboardMenuLink(): JSX.Element {
	const { data: session } = useSession();
	
	if (session) {
		return (
			<NextLink href={"/dashboard"}>
				<Link  color="text" block>
			Dashboard
				</Link>
			</NextLink>
		);
	}
	
	return (
		<></>
	);
}

export default DashboardMenuLink;