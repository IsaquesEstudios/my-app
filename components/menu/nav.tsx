import Link from "next/link";
import Layout from "../layout";
import NavItemLink from "./nav-item-link";
import { Separator } from "../ui/separator";

export default function Nav() {
  return (
    <nav className="w-[300px] border-r-[1px]">
      <ul>
        <NavItemLink key={1} title="Início" href="/painel" />
        <NavItemLink
          key={1}
          title="Assinaturas"
          href="/painel/assinaturas"
        />
      </ul>
    </nav>
  );
}
