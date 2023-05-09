<script setup lang="ts">
import BarChart from "@/@core/libs/chartjs/components/BarChart";
// import datalabels from "chartjs-plugin-datalabels";
// console.log(datalabels);
// interface Props {
//   colors?: ChartJsCustomColors;
// }

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    responsive: true,
  },
  responsive: true,

  scales: {
    x: {
      categoryPercentage: 1.0,
      barPercentage: 1.0,
    },

    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 10,
      },
    },
  },
};

var data = {
  labels: [
    " تسلط بر درس",
    "نحوه تدریس",
    "نحوه رفتار",
    "حضور",
    "مشارکت دادن دانشجو",
    "پاسخگویی",
  ],

  datasets: [
    {
      maxBarThickness: 20,
      backgroundColor: [
        "#52AE32",
        "#6CBE99",
        "#F7A600",
        "#EA342A",
        "#8D99AE",
        "#FFEE00",
      ],
      borderRadius: { topRight: 3, topLeft: 3 },
      data: [50, 60, 25, 65, 70, 50],
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
