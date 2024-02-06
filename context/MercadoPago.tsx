"use client";

import { ApiMercadoPago } from "@/api/MercadoPago";
import { ReactNode, createContext, useEffect, useState } from "react";

type PaymentType = {
  allReceivedPayment: [];
  currentMonth: [];
  totalValueMonth: number;
};

type MercadoPagoProps = {
  payment: any;
};

type MercadoPagoType = {
  children: ReactNode;
};

const MercadoPagoContext = createContext({} as MercadoPagoProps);

export function MercadoPago({ children }: MercadoPagoType) {
  const [payment, setPayment] = useState<PaymentType>();

  useEffect(() => {
    async function ShowPayments() {
      const { data } = await ApiMercadoPago.get("/payment/show/all", {
        params: {
          sort: "date_approved",
          criteria: "desc",
          status: "active",
          limit: "100",
        },
      });

      setPayment(data);
    }
    ShowPayments();
  }, []);

  return (
    <MercadoPagoContext.Provider value={{ payment }}>
      {children}
    </MercadoPagoContext.Provider>
  );
}

export { MercadoPagoContext };
