import { ReactNode } from "react"

type PType = {
  children: ReactNode
}

export function P({children}:PType) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-2 text-[#1f1f1f] dark:text-white">
      {children}
    </p>
  )
}
