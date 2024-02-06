"use client";
import Card from "@/components/card";
import { H1 } from "@/components/fonts/h1";
import { Main } from "@/components/main";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import ChartsColumn from "@/components/chartsColumn";
import { H2 } from "@/components/fonts/h2";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaymentComponents } from "@/components/PaymentComponent";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useContext } from "react";
import { MercadoPagoContext } from "@/context/MercadoPago";

export default function Page() {
  const { payment } = useContext(MercadoPagoContext);

  console.log(payment);

  return (
    <Main>
      <H1>Admin</H1>
      <div className="mt-4 flex gap-x-4 w-full">
        <Card
          title="Mês atual"
          value={`${payment?.totalValueMonth}`}
          key={1}
          icon={<LiaMoneyBillWaveAltSolid size={22} />}
          compare="+180% comprado mês anterior"
        />
        <Card
          title="Renda por assinatura"
          value="R$324.00"
          recurrency="Mês"
          key={2}
          icon={<IoCalendarOutline size={22} />}
          compare="8 Assinaturas atuais"
        />
        <Card
          title="Gasto com dispesas"
          value="R$324.00"
          key={3}
          icon={<MdPerson size={22} />}
          compare="3 Funcionários atuais"
        />
      </div>
      <div className="mt-4 grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <ChartsColumn />
        </div>

        <div className="col-span-2 border rounded-lg p-4">
          <div className="flex gap-x-4">
            <H2>Pagamentos recentes</H2>
            <Badge variant="outline">5</Badge>
          </div>
          <Separator className="mt-4" />
          <ScrollArea className="h-[425px]">
            {payment?.allReceivedPayment.map((item: any, index: number) => {
              return (
                <PaymentComponents
                  key={index}
                  title={payment?.currentMonth.title}
                  value={`${item?.transaction_amount}.00`}
                  approved={item?.date_approved}
                  method={item?.payment_method_id}
                />
              );
            })}
          </ScrollArea>
        </div>
      </div>
      )
    </Main>
  );
}
