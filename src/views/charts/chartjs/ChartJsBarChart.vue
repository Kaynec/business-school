<script setup lang="ts">
import BarChart from "@/@core/libs/chartjs/components/BarChart";
import type { ChartJsCustomColors } from "@/views/demos/charts-and-maps/charts/chartjs/types";
// import datalabels from "chartjs-plugin-datalabels";
// console.log(datalabels);
interface Props {
  colors?: ChartJsCustomColors;
}

const props = defineProps<Props>();

const chartOptions = {
  plugins: {
    legend: {
      display: true,
    },
    responsive: true,
    datalabels: {
      // This code is used to display data values
      anchor: "end",
      align: "top",
      marginLeft: 100,
      formatter: Math.round,

      font: {
        weight: "bold",
        size: 16,
      },
    },
  },
  responsive: true,

  scales: {
    x: {
      categoryPercentage: 1.0,
      barPercentage: 1.0,
    },

    y: {
      min: 0,
      max: 5,
      step: 1,
      ticks: {
        // forces step size to be 50 units
        stepSize: 1,
      },
    },
  },
};

var data = {
  labels: [
    "دیجیتال مارکتینگ",
    "توسعه فردی",
    "بورس مقدماتی",
    "دیجیتال مارکتینگ",
  ],

  datasets: [
    {
      label: "PLO1",
      maxBarThickness: 20,
      backgroundColor: "#E30613",
      borderRadius: { topRight: 10, topLeft: 10 },
      data: [1, 3.5, 5.0, 5.0],
    },
    {
      label: "PLO2",
      maxBarThickness: 20,
      backgroundColor: "#D9D9D9",
      borderRadius: { topRight: 10, topLeft: 10 },
      data: [5.0, 4.9, 5, 1.2],
    },
  ],
};
</script>

<template>
  <BarChart
    class="rounded-xl"
    style="padding-left: 3rem"
    :chart-data="data"
    :chart-options="chartOptions"
    :height="200"
  />
</template>
