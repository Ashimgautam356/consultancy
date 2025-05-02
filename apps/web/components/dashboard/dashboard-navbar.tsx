"use client"

import { SessionProvider } from "next-auth/react"
import Nav from "./client-component/Nav"
export  function DashboardNavbar() {
  return (
    <SessionProvider>
      <Nav />
    </SessionProvider>
  )
}

