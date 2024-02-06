import { ReactNode } from "react"

type H2Types = {
  children: ReactNode
}

export function H2({children}:H2Types) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
      {children}
    </h2>
  )
}
