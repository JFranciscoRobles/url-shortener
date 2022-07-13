import { NextRequest, NextResponse, userAgent} from "next/server";

export const config = {
	matcher: "/location",
	runtime: "experimental-edge",
};

export function middleware(req: NextRequest) {
	const { device, browser } = userAgent(req);
	const country = req.geo?.country || "Unknown";
	const city = req.geo?.city || "Unknown";
	const browserName = browser.name || "Unknown";
	const deviceType = device.type || "PC";
	console.log({
		country,
		city,
		browserName,
		deviceType
	});
	return NextResponse.redirect("https://www.google.com");
}