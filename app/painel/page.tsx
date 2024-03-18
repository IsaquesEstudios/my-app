// "use client";
import { Main } from "@/components/main";
import ChartsColumn from "@/components/chartsColumn";
import { Api } from "@/api/Api";
import Card from "@/components/utils/card";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

type PlansMercadoPago = {
  data: {
    data: {
      paging: {
        offset: number;
        limit: number;
        total: number;
      };
      results: [];
    };
    PlansValue: number[];
    AllPlansValue: string;
  };
};

type paymentType = {
  data: {
    totalCurrentMonth: number;
    showAllSaveTotalForMonth: ItensShowAllSaveTotalForMonth[];
  };
};

type ItensShowAllSaveTotalForMonth = {
  identifier: string;
  month: string;
  total_month: string;
  year: number;
};

export default async function Page() {
  const payment: paymentType = await Api.get("/payment/show/all", {
    params: {
      sort: "date_approved",
      criteria: "desc",
      // status: "active",
      limit: "100",
    },
  });

  const MercadoPagoPlans: PlansMercadoPago = await Api.get(
    "/payment/plan/all",
    {
      params: {
        status: "active",
      },
    }
  );

  return (
    <Main>
      <div className="mt-4 flex gap-x-4 w-full">
        <Card
          title="Mês atual"
          value={payment?.data.totalCurrentMonth.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          key={1}
          icon={<LiaMoneyBillWaveAltSolid size={22} />}
          compare="+180% comprado mês anterior"
        />
        <Card
          title="Funcionários"
          value={payment?.data.totalCurrentMonth.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          key={1}
          icon={<LiaMoneyBillWaveAltSolid size={22} />}
          compare="+180% comprado mês anterior"
        />

        <Card
          title="Renda por assinatura"
          value={`+${MercadoPagoPlans?.data.AllPlansValue}`}
          recurrency="Mês"
          key={2}
          icon={<IoCalendarOutline size={22} />}
          compare={`${MercadoPagoPlans.data.data.paging.total} Assinaturas atuais`}
        />
      </div>

      <div className="mt-4 grid grid-cols-6 gap-4">
        {/* <div className="col-span-4">
          <ChartsColumn
            ShowAllSaveTotalForMonth={payment?.data.showAllSaveTotalForMonth}
          />
        </div> */}

        <div className="col-span-2 border rounded-lg p-4"></div>
      </div>
    </Main>
  );
}
