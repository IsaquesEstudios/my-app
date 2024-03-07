import Link from "next/link";
import Layout from "./layout";
import NavItemLink from "./nav-item-link";
import { Separator } from "./ui/separator";

export default function Nav() {
  return (
    <nav className="w-[300px] border-r-[1px]">
      <ul className="w-full">
        <NavItemLink href="/painel/admin">Home</NavItemLink>
        <NavItemLink href="/painel/admin/assinaturas">Assinaturas</NavItemLink>
      </ul>
    </nav>
  );
}
