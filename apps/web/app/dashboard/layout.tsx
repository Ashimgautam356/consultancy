import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";



export default function dashboardLayout({children}:Readonly<{children:React.ReactNode}>){
    return(
      <>
        <DashboardNavbar></DashboardNavbar>
        {children}
      </>
    )
}