import type { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function ( res: NextApiResponse) {
		
	const allUsers = await prisma.user.findMany();
      
	res.status(200).json( allUsers);
}

