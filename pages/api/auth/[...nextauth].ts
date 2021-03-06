import  NextAuth  from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || ""
		})
	],
	session: {
		strategy:"jwt"
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);
			return token;
		},
		session: async ({ session, token }) => {
			session.user.id = token.user.id;
			return session;
		}
	}
};

export default NextAuth(authOptions);