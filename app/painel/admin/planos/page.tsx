import { H1 } from "@/components/fonts/h1";
import { Main } from "@/components/main";
import { Table, TableHead, TableHeader } from "@/components/ui/table";
import { MercadoPagoContext } from "@/context/MercadoPago";
import { useContext } from "react";


export default function Page(){
  const {plans} = useContext(MercadoPagoContext)


  return(
    <Main>
      <H1>Planos</H1>
      <Table>
        <TableHead>
          <TableHeader></TableHeader>
        </TableHead>
      </Table>
    </Main>
  )
}