"use client"

import { Table } from "lucide-react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { useContext, useEffect, useState } from "react";
import { MercadoPagoContext } from "@/context/MercadoPago";
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
};

export function ListPaymentPerMonthComponent() {
  const [paymentPerMonth, setPaymentPerMonth] =
    useState<PaymentPerMonthState>();
  const { plans } = useContext(MercadoPagoContext);

  useEffect(() => {
    async function GetAllInformationRequest() {
      const { data } = await Api.get("/payment-per-month/show/all");

      setPaymentPerMonth(data);
    }

    GetAllInformationRequest();
  }, []);

  return (
    <Table className="border-[1px] rounded-lg">
      <TableHeader>
        <TableRow>
          <TableHead>TITULO</TableHead>
          <TableHead className="w-[200px]">PAGADOR</TableHead>
          <TableHead className="w-[150px]">VALOR</TableHead>
          <TableHead className="w-[150px]">DIA</TableHead>
          <TableHead className="w-[200px]">ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paymentPerMonth?.payment.map(
          (item: PaymentPerMonthType, index: number) => {
            console.log(item?.company?.company_name);
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
      </TableBody>
    </Table>
  );
}
