import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

export const config = {
	runtime: "experimental-edge",
};

export default async function () {
	
	const allUsers = await prisma.user.findMany();
      
	return NextResponse.json(allUsers);
}