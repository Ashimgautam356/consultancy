import { ReactNode } from "react"

interface AvtarType{
    children: ReactNode
}

interface AvatarFallback{
    children:ReactNode
}
interface Avatarimg{
    src:string,
    alt:string,
}


export  function Avatar({children}:AvtarType) {
    return(
        <div>{children}</div>
    )
}
export  function AvatarFallback({children}:AvatarFallback) {
    return(
        <div>{children}</div>
    )
}
export  function AvatarImage({src,alt}:Avatarimg) {
    return(
        <img src={src}></img>
    )
}