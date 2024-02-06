import Link from "next/link";
import { TypographyLarge } from "./ui/large";
import { Separator } from "./ui/separator";

type MenuItemProps = {
  href: string
  title: string
}

export function MenuItem({href, title}:MenuItemProps){

  return(
    <li className="px-4 py-4 flex">

      <Link href={href}>
        <TypographyLarge>{title}</TypographyLarge>
      </Link>
    </li>
  )
}