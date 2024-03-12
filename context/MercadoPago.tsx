"use client";

import { Api } from "./../api/Api";
import { ReactNode, createContext, useEffect, useState } from "react";

type PaymentType = {
  allReceivedPayment: [];
  currentMonth: [];
  totalValueMonth: number;
};

type MercadoPagoProps = {
  payment: any;
  plans: any;
};

type MercadoPagoType = {
  children: ReactNode;
};

const MercadoPagoContext = createContext({} as MercadoPagoProps);

export function MercadoPago({ children }: MercadoPagoType) {
  const [payment, setPayment] = useState<PaymentType>();
  const [plans, setPlans] = useState();
  useEffect(() => {
    async function ShowPayments() {
      const payment = await Api.get("/payment/show/all", {
        params: {
          sort: "date_approved",
          criteria: "desc",
          // status: "active",
          limit: "100",
        },
      });

      const Plans = await Api.get("/payment/plan/all", {
        params: {
          status: "active",
        },
      });

      setPlans(Plans.data);
      setPayment(payment.data);
    }
    ShowPayments();
  }, []);

  return (
    <MercadoPagoContext.Provider value={{ payment, plans }}>
      {children}
    </MercadoPagoContext.Provider>
  );
}

export { MercadoPagoContext };
