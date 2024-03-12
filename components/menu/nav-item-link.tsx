import Link from "next/link";
import { ReactNode } from "react";

type NavItemLinkType = {
  href: string;
  title: string;
};

export default function NavItemLink({ title, href }: NavItemLinkType) {
  return (
    <Link href={href}>
      <li className="flex items-center py-4 px-4 border-b-[1px] hover:bg-[#f1f1f1]">{title}</li>
    </Link>
  );
}
