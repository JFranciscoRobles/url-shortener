import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{CssBaseline.flush()}
					<link href="https://fonts.googleapis.com" rel="preconnect"/>
					<link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect"/>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
				</Head>
				<body style={{fontFamily: "'Inter', sans-serif"}}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
