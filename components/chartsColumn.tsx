"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: true });

type ChartsColumn = {
  month: string;
};

type ItensShowAllSaveTotalForMonth = {
  identifier: string;
  month: string;
  total_month: string;
  year: number;
};

type ItensCharts = {
  ShowAllSaveTotalForMonth: ItensShowAllSaveTotalForMonth[];
};

export default function ChartsColumn({
  ShowAllSaveTotalForMonth,
}: ItensCharts) {
  const [DataCharts, setDataCharts] = useState<any>();

  useEffect(() => {
    setDataCharts({
      series: [
        {
          name: "Valores mensais",
          data: ShowAllSaveTotalForMonth.map(
            (item: ItensShowAllSaveTotalForMonth) => {
              return item.total_month;
            }
          ),
        },
      ],
      options: {
        chart: {
          height: 500,
          type: "bar",
        },
        grid: {
          show: true,
          borderColor: "#f2f2f2",
          strokeDashArray: 0,
          position: "back",
          yaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: any) {
            return "R$ " + val;
          },
          offsetY: -20,
          style: {
            fontFamily: "montserrat",
            fontSize: "12px",
            colors: ["black"],
            fontWidth: 300,
          },
        },
        xaxis: {
          categories: ShowAllSaveTotalForMonth.map(
            (item: ItensShowAllSaveTotalForMonth) => {
              return item.month;
            }
          ),
          tickAmount: undefined,
          tickPlacement: "between",
          min: undefined,
          max: undefined,
          stepSize: undefined,
          range: undefined,
          floating: false,
          decimalsInFloat: undefined,
          overwriteCategories: undefined,
          position: "bottom",
          labels: {
            show: true,
            rotateAlways: false,
            hideOverlappingLabels: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: [],
              fontSize: "10px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: -2,
          },
          axisBorder: {
            show: true,
            color: "#1f1f1f",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "#1f1f1f",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [],
              fontSize: "14px",
              fontFamily: "montserrat, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          title: {
            text: "Balanço de valores anual",
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "12px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-title",
            },
          },
        },
        fill: {
          colors: "#1f1f1f",
          opacity: 1,
          type: "solid",
        },
      },
    });
  }, []);

  return (
    <div id="chart" className="w-full border p-4 rounded-lg h-[525px]">
      <ApexCharts
        options={DataCharts.options}
        series={DataCharts.series}
        type="bar"
        height="500px"
        width="100%"
      />
    </div>
  );
}
