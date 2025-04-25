import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Signin from "../../components/auth/SigninPage"

export default async function LoginPage() {
  const session = await getServerSession()
  if(session?.user){
    redirect("/dashboard")
  }
  return (
    <Signin></Signin>
  )
}

