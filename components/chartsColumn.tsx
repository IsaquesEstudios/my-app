"use client";

import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";

export default function ChartsColumn() {
  const [height, setHeight] = useState<any>("500px");
  const [data, setData] = useState<any>({
    series: [
      {
        name: "Valores mensais",
        data: [
          4000, 7000, 2000, 1041, 3874, 2983, 6252, 6788, 6879, 7890, 8099,
          10002,
        ],
      },
    ],
    options: {
      chart: {
        height: height,
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
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
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
            fontSize: "12px",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
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
            fontSize: "10px",
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

  return (
    <div id="chart" className={`w-full border p-4 rounded-lg h-[525px] `}>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={height}
      />
    </div>
  );
}
