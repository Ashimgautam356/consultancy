"use client"

import { SessionProvider } from "next-auth/react"
import Nav from "./client-component/Nav"

type Props = {
  children: React.ReactNode;
};

export  function DashboardNavbar({ children }: Props) {
  return (
    <SessionProvider>
      <Nav />
      {children}
    </SessionProvider>
  )
}

