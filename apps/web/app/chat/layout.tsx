import { redirect } from "next/navigation";
import { DashboardNavbar } from "../../components/dashboard/dashboard-navbar";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import Nav from "../../components/dashboard/client-component/Nav";

export default async function dashboardLayout({children}:Readonly<{children:React.ReactNode}>){

  const session = await getServerSession()
  if(!session?.user){
    redirect("/signin")
  }


    return(
      <>
        <DashboardNavbar>
          <Nav></Nav>
          {children}
        </DashboardNavbar>
      </>
    )
}