import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexMarkers,
  ApexTooltip,
  ApexStates,
  ApexPlotOptions,
  ApexLegend,
  ApexDataLabels,
  ApexResponsive,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#5C61F2";
let secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

export interface TotalEarningsChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors?: string[];
  fill?: ApexFill;
  dataLabels: {
    enabled: boolean;
  };
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  states?: ApexStates;
  grid?: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  tooltip: ApexTooltip;
  // Additional custom properties
  title: string;
  price: string;
  icon: string;
  percentage: string;
  class: string;
}
export const TotalEarnings: TotalEarningsChart = {
  series: [
    {
      name: "Earnings",
      data: [25, 16, 27, 22, 22, 18, 22, 12, 16, 16, 30, 22, 32],
    },
  ],
  chart: {
    type: "area",
    height: 203,
    offsetY: -30,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: primary_color,
      opacity: 0.2,
    },
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: primary_color,
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Project Created" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },

  title: "Total Earnings",
  price: "12,463",
  icon: "down-arrow",
  percentage: "+ 20.08%",
  class: "danger",
};

export const TotalExpenses: TotalEarningsChart = {
  series: [
    {
      name: "Earning",
      data: [92, 64, 43, 80, 58, 92, 46, 76],
    },
    {
      name: "Earning",
      data: [20, 48, 69, 32, 54, 20, 66, 36],
    },
  ],
  chart: {
    type: "bar",
    offsetY: -10,
    toolbar: {
      show: false,
    },
    height: 203,
    stacked: true,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      columnWidth: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
    colors: ["#F2F5FA", secondary_color],
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Expenses" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },

  title: "Total Expenses",
  price: "14,852",
  icon: "up-arrow",
  percentage: "+ 60.09%",
  class: "success",
};

export interface GrowthChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}
export const growthChart: GrowthChart = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [190, 240, 270, 220, 190, 250, 250, 270, 240],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [
        220, 120, 260, 80, 220, 120, 220, 60, 280, 100, 180, 60, 180, 220, 100,
        200, 180,
      ],
    },
  ],
  chart: {
    height: 315,
    type: "area",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: false,
      top: 5,
      left: 6,
      blur: 2,
      color: "primary_color",
      opacity: 0.5,
    },
  },

  stroke: {
    width: [0, 2, 5],
    curve: "stepline",
  },
  plotOptions: {
    bar: {
      columnWidth: "20px",
    },
  },
  colors: ["#bebebe", primary_color],

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "",
      "feb",
      "",
      "Mar",
      "",
      "Apr",
      "",
      "May",
      "",
      "Jun",
      "",
      "July",
      "",
      "Aug",
      "",
      "Sep",
    ],
    labels: {
      style: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        colors: "#959595",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        colors: "#171829",
      },
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Growth" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export interface ProductValuationChartType {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  colors: string[];
  fill: ApexFill;
  labels: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  tooltip: ApexTooltip;
}

export const ProductValuationChart: ProductValuationChartType = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [
        55, 44, 47, 44, 50, 50, 55, 45, 32, 50, 60, 32, 38, 45, 40, 40, 50,
      ],
    },
    {
      name: "Order",
      type: "line",
      data: [54, 64, 40, 50, 60, 80, 60, 70, 62, 50, 45, 40, 60, 65, 70],
    },
  ],
  chart: {
    height: 250,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 4,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "smooth",
    dashArray: [0, 8],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#7064F5", "#FF9766"],
  fill: {
    type: ["gradient", "solid"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  labels: [
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
    "Aug",
    "Sep",
  ],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#7064F5",
        strokeColor: "var(--white)",
        size: 5,
      },
    ],
    hover: {
      size: 5,
      sizeOffset: 0,
    },
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Earnings :" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export interface ProductValuation2Chart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  states: ApexStates;
  responsive: ApexResponsive[];
}

export const ProductValuation2: ProductValuation2Chart = {
  series: [
    {
      name: "Revenue",
      data: [
        72, 72, 63, 62, 66, 66, 66, 64, 51, 51, 64, 65, 38, 38, 36, 36, 55, 55,
        50, 50, 32, 32, 50, 50, 70, 70, 62, 62, 48, 48, 57, 57, 63, 63, 75, 75,
        58, 58, 72, 72, 58, 58, 72, 72, 112, 112, 72, 72, 63, 62, 66, 66, 66,
        64, 51, 51, 64, 65, 38, 38, 36, 36, 115, 115,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
      columnWidth: "60%",
    },
  },
  colors: ["var(--light-bg)"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.7,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};
