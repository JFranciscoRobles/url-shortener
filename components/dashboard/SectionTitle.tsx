import { Container, Text} from "@nextui-org/react";
import React from "react";

type Props = {
    title:string
}

function SectionTitle({title}: Props) {
	return (
		<Container alignContent="center" alignItems="center" css={{height:"$14", bgColor:"$accents1", pl:"$8", borderRadius:"$md", display:"flex"}} justify="center">
			<Text css={{w:"100%", color:"$accents8", fontSize:"$xs"}} transform="uppercase" b >{title}</Text>
		</Container>
	);
}

export default SectionTitle;