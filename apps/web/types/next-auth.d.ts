import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      jwtToken: string;
      role: string;
      email: string;
      name: string;

    }
  }

  interface User {
    id: string;
    jwtToken: string;
    role: string;
    email: string;
    name: string;
  }
}
