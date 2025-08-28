import { ChartConfiguration, ChartDataset, ChartType } from "chart.js";

let primary_color = localStorage.getItem("primary_color") || "#5C61F2";
let secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

export const barChartChartColors: string[] = [primary_color, secondary_color];

export const barChartChartLabels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const barChartChartType: ChartType = "bar";

export const barChartChartLegend: boolean = false;

export const barChartChartOptions: ChartConfiguration<"bar">["options"] = {
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
      },
      beginAtZero: true,
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: barChartChartLegend,
    },
  },
};

export const barChartChartData: ChartDataset<"bar">[] = [
  {
    label: "My First dataset",
    data: [35, 59, 80, 81, 56, 55, 40],
    backgroundColor: "rgba(0, 102, 102, 0.2)",
    borderColor: primary_color,
    borderWidth: 2,
  },
  {
    label: "My Second dataset",
    data: [28, 48, 40, 19, 86, 27, 90],
    backgroundColor: "rgba(254, 106, 73, 0.3)",
    borderColor: secondary_color,
    borderWidth: 2,
  },
];

// line graph

export const lineGraphLabels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const lineGraphType: ChartType = "line";

export const lineGraphLegend: boolean = false;

export const lineGraphData: ChartDataset<"line">[] = [
  {
    label: "My First dataset",
    data: [10, 59, 80, 81, 56, 55, 40],
    fill: true,
    backgroundColor: "rgba(0, 102, 102, 0.2)",
    borderColor: primary_color,
    borderWidth: 2,
    pointBackgroundColor: primary_color,
    pointBorderColor: "#fff",
    pointRadius: 4,
    pointHoverRadius: 6,
    pointHoverBorderColor: "#000",
  },
  {
    label: "My Second dataset",
    data: [28, 48, 40, 19, 86, 27, 90],
    fill: true,
    backgroundColor: "rgba(254, 106, 73, 0.3)",
    borderColor: secondary_color,
    borderWidth: 2,
    pointBackgroundColor: secondary_color,
    pointBorderColor: "#fff",
    pointRadius: 4,
    pointHoverRadius: 6,
    pointHoverBorderColor: secondary_color,
  },
];

export const lineGraphOptions: ChartConfiguration<"line">["options"] = {
  responsive: true,
  plugins: {
    legend: {
      display: lineGraphLegend,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(0,0,0,0.05)",
        lineWidth: 1,
      },
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0,0,0,0.05)",
        lineWidth: 1,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 4,
      hitRadius: 20,
      borderWidth: 1,
    },
  },
};

// radar chart //

export const radarGraphLabels: string[] = [
  "Ford",
  "Chevy",
  "Toyota",
  "Honda",
  "Mazda",
];

export const radarGraphType: ChartType = "radar";

export const radarGraphLegend: boolean = false;

export const radarGraphData: ChartDataset<"radar">[] = [
  {
    label: "My First dataset",
    data: [12, 3, 5, 18, 7],
    backgroundColor: "rgba(0, 102, 102, 0.2)",
    borderColor: primary_color,
    borderWidth: 2,
    pointBackgroundColor: primary_color,
    pointBorderColor: primary_color,
    pointHoverBackgroundColor: primary_color,
    pointRadius: 3,
    pointHoverBorderColor: "rgba(0, 102, 102, 0.2)",
  },
];

export const radarGraphOptions: ChartConfiguration<"radar">["options"] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    r: {
      grid: {
        color: "rgba(0,0,0,.2)",
        lineWidth: 1,
      },
      angleLines: {
        display: true,
        color: "rgba(0,0,0,.2)",
        lineWidth: 1,
      },
      pointLabels: {
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 3,
      borderWidth: 1,
      hitRadius: 20,
    },
  },
};
//line chart

export const lineChartLabels: string[] = [
  "",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
];

export const lineChartType: ChartType = "line";

export const lineChartLegend: boolean = false;

export const lineChartData: ChartDataset<"line">[] = [
  {
    label: "Dataset 1",
    data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
    fill: true,
    backgroundColor: "rgba(81, 187, 37, 0.2)",
    borderColor: "#51bb25",
    borderWidth: 2,
    pointBackgroundColor: "#51bb25",
    pointRadius: 3,
    pointHoverRadius: 6,
  },
  {
    label: "Dataset 2",
    data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
    fill: true,
    backgroundColor: "rgba(254, 106, 73, 0.3)",
    borderColor: secondary_color,
    borderWidth: 2,
    pointBackgroundColor: secondary_color,
    pointRadius: 3,
    pointHoverRadius: 6,
  },
  {
    label: "Dataset 3",
    data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
    fill: true,
    backgroundColor: "rgba(0, 102, 102, 0.2)",
    borderColor: primary_color,
    borderWidth: 2,
    pointBackgroundColor: primary_color,
    pointRadius: 3,
    pointHoverRadius: 6,
  },
];

export const lineChartOptions: ChartConfiguration<"line">["options"] = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  responsive: true,
};
// doughnutchart //

export const doughnutChartLegend: boolean = false;

export const doughnutChartLabels: string[] = [
  "Primary",
  "Secondary",
  "Success",
];

export const doughnutChartData: ChartDataset<"doughnut">[] = [
  {
    label: "My First Dataset",
    data: [300, 50, 100],
    backgroundColor: [primary_color, secondary_color, "#51bb25"],
  },
];

export const doughnutChartType: ChartType = "doughnut";

export const doughnutChartOptions: ChartConfiguration<"doughnut">["options"] = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0, // replaces animation: false
  },
  plugins: {
    legend: {
      display: doughnutChartLegend,
    },
    tooltip: {
      enabled: true,
    },
  },
};

//polar chart

export const polarChartLabels: string[] = [
  "Yellow",
  "Sky",
  "Black",
  "Grey",
  "Dark Grey",
];

export const polarChartType: ChartType = "polarArea";

export const polarChartLegend: boolean = false;

export const polarChartData: ChartDataset<"polarArea">[] = [
  {
    data: [300, 50, 100, 40, 120],
    backgroundColor: [
      primary_color,
      "#f8d62b",
      "#51bb25",
      "#a927f9",
      secondary_color,
    ],
    borderColor: "#fff",
    borderWidth: 2,
  },
];

export const polarChartOptions: ChartConfiguration<"polarArea">["options"] = {
  responsive: true,
  plugins: {
    legend: {
      display: polarChartLegend,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {},
  animation: {
    duration: 1000,
    easing: "easeOutBounce",
  },
};
