import authDBConnect from "@/lib/DB/authDBConnect";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session as NextAuthSession, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";

interface Session extends NextAuthSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  };
}

interface User extends NextAuthUser {
  role?: string;
}

interface UserData extends User {
  email: string;
  password: string;
  role?: string;
}

// Explicitly typing authOptions to ensure correct type inference
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<UserData | null> {
        if (!credentials) return null;
        const { email, password } = credentials;
        try {
          const collection = await authDBConnect("userData");
          const user = (await collection.findOne({
            email,
          })) as unknown as UserData;
          const isPasswordValid = password == user?.password;
          if (isPasswordValid) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(`DB Error ${error}`);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }): Promise<string> {
      return baseUrl;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
      user: User;
      newSession: boolean;
      trigger: "update";
    }): Promise<Session> {
      if (token && session.user) {
        session.user.email = token.email;
        session.user.role = token.role as string | null | undefined;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      if (user) {
        token.email = user.email;
        token.role = user?.role;
      }
      return token;
    },
  },
};
