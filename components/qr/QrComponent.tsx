import { Container, FormElement, Grid, Input } from "@nextui-org/react";
import QRCodeStyling from "qr-code-styling";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const qrCode = new QRCodeStyling({
	width: 300,
	height: 300,
	dotsOptions: {
		color: "#black",
		type: "rounded"
	},
});

function QrComponent() {
	const [url, setUrl] = useState("https://hpsurl-shortener.vercel.app/es");

	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (ref.current != null) {
			qrCode.append(ref.current);
		}
	}, []);
    
	useEffect(() => {
		qrCode.update({
			data: url
		});
	}, [url]);
    
	const onUrlChange = (e:ChangeEvent<FormElement>) => {
		e.preventDefault();
		setUrl(e.target.value);
	};
	
	return (
		<Container>
			<Grid.Container justify="center" gap={1}>
				<Grid xs={12} justify="center">
					<Input size="lg"  css={{w:"300px"}} label="QrText" value={url} onChange={onUrlChange}  />
				</Grid>
				<Grid xs={12} justify="center">
					<div ref={ref} />
				</Grid>
			</Grid.Container>
		</Container>
	);
}

export default QrComponent;