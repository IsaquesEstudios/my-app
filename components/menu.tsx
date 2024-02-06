import Layout from "./layout";
import { MenuItem } from "./menu-item";
import { Separator } from "./ui/separator";

export default function Menu() {
  const itens: string[] = ["painel", "planos", "pagamentos"];

  return (
    <Layout>
      <ul className="flex">
        {itens.map((item: string, index: number) => {
          return (
            <>
            <MenuItem key={index} title={item} href={`/${item}`} />
            </>
          )
        })}
      </ul>
    </Layout>
  );
}
