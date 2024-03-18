import Card from "@/components/utils/card";
import InputForm from "@/components/form/input-form";
import InputTextArea from "@/components/form/textarea";
import { Main } from "@/components/main";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaMoneyBillTrendUp, FaRegCreditCard } from "react-icons/fa6";
import { Api } from "@/api/Api";

type PlansTypes = {
  reason: string;
  auto_recurring: {
    frequency_type: string;
    transaction_amount: string;
  };
  subscribed: string;
};

type PaymentPerMonthType = {
  company: {
    company_name: string;
  };
  title: string;
  description: string;
  id: string;
  pay_day: string;
  payment_id: string;
  value: string;
};

type PaymentPerMonthState = {
  payment: PaymentPerMonthType[];
  AllValuePerMonth: string;
};

export default async function Page() {
  const plans = await Api.get("/payment/plan/all", {
    params: {
      status: "active",
    },
  });

  const debitByEmail = await Api.get("/payment-per-month/show/all");

  return (
    <Main className="relative">
      <div className="grid grid-cols-2 gap-10 mb-10">
        <Card
          title="Débito automático"
          value={plans?.data.AllPlansValue}
          key={1}
          compare={`Pagamentos ativos por email: ${plans?.data.data.paging.total}`}
          icon={<FaMoneyBillTrendUp />}
        />
        {/* <Card
          title="Débito Automático Mercado Pago"
          value={plans?.AllPlansValue}
          key={2}
          compare={`Pagamentos ativos por email: ${plans?.PlansValue?.length}`}
          icon={<FaRegCreditCard />}
        /> */}
      </div>

      {/* <div className="flex justify-between mb-4">
        <form className="w-full flex mr-4 gap-4">
          <Input placeholder="Filtro" /> <Button>Filtrar</Button>
        </form>
        <Button onClick={HandleNewPayment}>Novo pagamento</Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Criar assinatura</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <form className="flex flex-col gap-4">
              <InputForm
                title="Titulo *"
                placeholder="Resumo do serviço"
                type="text"
                required
              />

              <div className="flex gap-8">
                <InputForm
                  title="Valor cobrado *"
                  placeholder="ex: 100.00"
                  type="number"
                  required
                />
                <InputForm
                  title="Dia da emição *"
                  placeholder="min 0 max 28"
                  maxLength={2}
                  type="number"
                  required
                />
              </div>
              <InputTextArea
                title="Descrição do serviço *"
                placeholder="Descrição detalhada visível na cobrança"
              />

              <div>
                <p>Vincular pagamento</p>
              </div>

              <div className="flex gap-4 flex-col">
                <InputForm
                  title="ID do cliente"
                  placeholder="65c977ef54253b6e0caa7ef4"
                  type="text"
                  required
                />
                <InputForm
                  title="ID do responsável"
                  placeholder="65c978a18076e3b02195f5a4"
                  type="text"
                  required
                />
              </div>
            </form>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div> */}

      <Table className="border-[1px] rounded-sm">
        <TableHeader>
          <TableRow>
            <TableHead>TITULO</TableHead>
            <TableHead className="w-[200px]">PAGADOR</TableHead>
            <TableHead className="w-[150px]">VALOR</TableHead>
            <TableHead className="w-[150px]">DIA</TableHead>
            <TableHead className="w-[200px]">ID</TableHead>
          </TableRow>
        </TableHeader>
        {/* <TableBody>
          {paymentPerMonth?.payment?.map(
            (item: PaymentPerMonthType, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="w-[200px]">
                    {item?.company?.company_name}
                  </TableCell>
                  <TableCell className="w-[150px]">
                    {`R$ ${item.value}`}
                  </TableCell>
                  <TableCell className="w-[150px]">{item.pay_day}</TableCell>
                  <TableCell className="w-[200px]">{item.id}</TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody> */}
      </Table>
    </Main>
  );
}
