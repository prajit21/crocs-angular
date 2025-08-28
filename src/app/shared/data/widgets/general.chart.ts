import {
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#5C61F2";
let secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

export interface DailyVisitorChart {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[];
  tooltip: ApexTooltip;
}

export const dailyVisitorChart: DailyVisitorChart = {
  chart: {
    height: 255,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "series1",
      data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 50, 100, 0],
    },
    {
      name: "series2",
      data: [5, 50, 70, 55, 78, 45, 100, 80, 85, 60, 35, 80, 0],
    },
  ],
  xaxis: {
    categories: [
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
      "jan",
    ],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number): string {
        return "$" + val + "k";
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  grid: {
    show: false,
  },

  legend: {
    show: false,
  },
  fill: {
    colors: [primary_color, secondary_color],
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.3,
      stops: [0, 90, 100],
    },
  },
  colors: [primary_color, secondary_color],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Visitors" +
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

export interface ProductSalesChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
}
export const productSalesChart: ProductSalesChart = {
  series: [
    {
      name: "Product Sales",
      data: [
        5, 15, 65, 40, 39, 50, 35, 38, 47, 40, 90, 58, 65, 70, 75, 70, 67, 30,
        69, 65, 75, 72, 65, 72, 95, 50, 45, 57, 54, 48, 53, 60, 25, 30,
      ],
    },
  ],
  chart: {
    height: 220,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 3,
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      " ",
      " ",
      "12:00",
      " ",
      " ",
      " ",
      "",
      " ",
      "15:00",
      " ",
      " ",
      " ",
      " ",
      " ",
      "18:00",
      " ",
      " ",
      " ",
      " ",
      " ",
      "21:00",
      " ",
      " ",
      " ",
      " ",
      " ",
      "03:00",
      " ",
      " ",
      " ",
      " ",
      " ",
      "04:00",
      " ",
      " ",
    ],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return "$" + val + "" + "k";
      },
      style: {
        fontSize: "14px",
        colors: "#171829",
        fontWeight: "500",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Product Sales" +
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

export interface StockReportChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  colors: string[];
}
export const stockReportChart: StockReportChart = {
  chart: {
    height: 247,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"],
  },
  series: [
    {
      name: "Sales Account",
      data: [162, 85, 26, 101, 185, 108, 157, 58, 26, 101, 102, 101],
    },
    {
      name: "General Leads",
      data: [117, 117, 83, 139, 56, 85, 117, 117, 83, 139, 56, 139],
    },
    {
      name: "Churn Rate",
      data: [31, 56, 164, 85, 128, 31, 31, 56, 164, 85, 128, 85],
    },
  ],
  xaxis: {
    categories: [
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
    ],
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: number): string {
        return "$ " + val + " thousands";
      },
    },
  },
  colors: [primary_color, secondary_color, "#51bb25"],
};
