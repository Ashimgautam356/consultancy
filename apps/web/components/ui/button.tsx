

import { ReactNode } from "react"


interface ButtonType{
    variant?:string, 
    size?:string,
    onClick?: ()=> void,
    children: ReactNode,
    type?:string,
    disabled?:boolean
}



export  function Button({variant,size,onClick, children,type,disabled}:ButtonType) {
    return(
        <button onClick={onClick}>{children}</button>
    )
}