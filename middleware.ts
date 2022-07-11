import { NextRequest, userAgent} from "next/server";

export const config = {
	matcher: "/location",
};

export function middleware(req: NextRequest) {
	const { device } = userAgent(req);
	const country = req.geo?.country || "US";
	console.log(country, device);
}