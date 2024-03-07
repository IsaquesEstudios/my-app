import Link from "next/link";
import { ReactNode } from "react";

type NavItemLinkType = {
  children: ReactNode;
  href: string;
};

export default function NavItemLink({ children, href }: NavItemLinkType) {
  return (
    <li className="py-4">
      <Link className="py-5 px-6 hover:bg-[#f2f2f2] " href={href}>
        {children}
      </Link>
    </li>
  );
}
