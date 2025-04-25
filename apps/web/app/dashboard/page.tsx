import { SessionProvider, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Main from '../../components/dashboard/Main'


export default  function page(){
    const session = useSession()

    if(session.status !== "authenticated"){
        redirect("/signin")
    }
    return (
        <SessionProvider>
            <Main></Main>
        </SessionProvider>
    )
}