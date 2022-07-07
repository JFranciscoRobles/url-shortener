import QRCodeStyling, { DotType } from "qr-code-styling";
import React, { useEffect, useRef } from "react";

const qrCode = new QRCodeStyling();

type typeQrComponentProps = {
	data: string
	bgColor?: string,
	fgColor?: string
	width?: number,
	height?: number,
	margin?: number,
	dotsType?: DotType,
}

function QrComponent(props:typeQrComponentProps) {
	
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (ref.current != null) {
			const options = qrCode._options;
			options.width = props.width || 300;
			options.height = props.height || 300;
			options.margin = props.margin || 10;
			options.dotsOptions.type = props.dotsType || "square";
			options.backgroundOptions.color = props.bgColor || "white";
			options.dotsOptions.color = props.fgColor || "black";
			qrCode.append(ref.current);
		}
	}, []);
    
	useEffect(() => {
		qrCode.update({
			data: props.data,
			backgroundOptions: {
				color:props.bgColor
			}
		});
	}, [props]);
	
	return (
		<div ref={ref} />			
	);
}

export default QrComponent;