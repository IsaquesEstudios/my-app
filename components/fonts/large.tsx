import { ReactNode } from "react"

type LargeType = {
  children: ReactNode
  className?: string,

}

export function Large({children, className}:LargeType){
  return(
    <p className={`${className} font-extrabold`}>{children}</p>
  )
}