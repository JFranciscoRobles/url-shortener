// ./pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: "fdsfskdjofdsf",
		encode: async ({ secret, token }) => {
			return jwt.sign({ ...token, userId: token.id }, secret, {
				algorithm: "HS256",
				expiresIn: 30 * 24 * 60 * 60, // 30 days
			});
		},
		decode: async ({ secret, token }) => {
			return jwt.verify(token, secret, { algorithms: ["HS256"] });
		},
	},
	callbacks: {
		async jwt({ token, account }) {
		
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
	}
});
