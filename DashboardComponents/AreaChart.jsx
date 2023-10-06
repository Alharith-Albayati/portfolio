import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "above chart and below title",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(44,217,255)",
      tension: 0.4,
      borderWidth: 4,
      pointRadius: 0,
      backgroundGradient: {
        angle: 90,
        type: "linear",
        gradientColors: ["rgb(34,135,180)", "rgb(30,76,130)"],
      },
    },
    {
      fill: true,
      label: "above chart and below title",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(0,117,255)",
      tension: 0.4,
      borderWidth: 4,
      pointRadius: 0,
      backgroundGradient: {
        angle: 90,
        type: "linear",
        gradientColors: ["rgb(7,75,174)", "rgb(18,42,98)"],
      },
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          fcolor: "white",
        },
      },
    },
    y: {
      grid: {
        color: "rgb(86,87,122)",
        borderColor: "transparent",
        borderDash: [1, 1],
      },
      ticks: {
        font: {
          size: 14,
          color: "white",
        },
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "this is the title",
    },
    tooltip: {
      enabled: true,
    },
  },
};

const AreaChart = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-blue-700 w-[50%]">
      <Line options={options} data={data} />
    </div>
  );
};

export default AreaChart;
