import { unstable_getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

export default async function (req:NextApiRequest, res:NextApiResponse) {
	const { method } = req;
	const prisma = new PrismaClient();

	switch (method) {
	case "GET":
		try {
			const links = await prisma.link.findMany();
			return res.status(200).send({
				data: links.length > 1 ? links : "No links found",
			});
		} catch (error) {
			return res.send({
				data: error,
			});
		}
	case "POST":
		try {
			const { name, urlPath } = req.body;
			const session = await unstable_getServerSession(req, res, authOptions);
			if (!session) {
				return res.status(403).send({
					content: "Inicia sesión para ver este contenido",
				});
			}
			const urlRedirect = "";
			const newLink = await prisma.link.create({
				data: {
					name,
					urlRedirect,
					urlPath,
					userId: session.user.id,
				}
			});
			return res.status(200).send({
				content: newLink,
			});
		} catch (error) {
			return res.send({
				data: error,
			});
		}
		break;
	default:
		res.setHeader("Allow", ["GET", "POST"]);
		res.status(405).end(`Method ${method} Not Allowed`);
		break;
	}
	
}