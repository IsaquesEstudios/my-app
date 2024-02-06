import { ReactNode } from "react"

type TypographyLargeProps = {
  children: ReactNode
}

export function TypographyLarge({children}: TypographyLargeProps) {
  return <span className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</span>
}