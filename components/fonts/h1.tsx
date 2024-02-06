import { ReactNode } from "react"

type H1 = {
  children: ReactNode
}

export function H1({children}:H1) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[#1f1f1f] dark:text-white">
      {children}
    </h1>
  )
}
