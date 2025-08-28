import {
  ApexChart,
  ApexStates,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexStroke,
  ApexMarkers,
  ApexResponsive,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#5C61F2";
let secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

export interface TotalRevenueChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  states?: ApexStates;
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  markers?: ApexMarkers;
  stroke?: ApexStroke;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
  title?: string;
  price?: string;
  arrowicon?: string;
  chartclass?: string;
  icon?: string;
  percentage?: string;
  color?: string;
  class?: string;
}
export const TotalRevenue: TotalRevenueChart = {
  series: [
    {
      name: "Revenue",
      data: [92, 64, 43, 80, 58, 92, 46, 76, 80],
    },
    {
      name: "Revenue",
      data: [20, 48, 69, 32, 54, 20, 66, 36, 32],
    },
  ],
  chart: {
    type: "bar",
    offsetY: 30,
    toolbar: {
      show: false,
    },
    height: 100,
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
      columnWidth: "55%",
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
    colors: ["#dedffc", primary_color],
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
        "Revenue" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
  title: "Total Revenue",
  price: "$73,927",
  arrowicon: "arrow-chart-up",
  chartclass: "earning-chart",
  icon: "Revenue",
  percentage: "+34%",
  color: "success",
};

export const TotalSales: TotalRevenueChart = {
  series: [
    {
      name: "Sales",
      data: [15, 25, 20, 35, 16, 18, 10, 22, 18, 25, 17],
    },
  ],
  chart: {
    type: "area",
    height: 120,
    offsetY: 50,
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
      color: secondary_color,
      opacity: 0.2,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
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
    width: 2,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Sales" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },

  title: "Total Sales",
  class: "up-sales",
  chartclass: "sales-chart",
  price: "24k USD",
  arrowicon: "arrow-chart",
  icon: "Sales",
  percentage: "-14%",
  color: "danger",
};

export const TotalCustomer: TotalRevenueChart = {
  series: [
    {
      name: "Desktops",
      data: [10, 35, 15, 78, 40, 60, 12, 60],
    },
  ],
  chart: {
    type: "area",
    height: 120,
    offsetY: 50,
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
      color: "#61AE41",
      opacity: 0.2,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
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
    curve: "straight",
    width: 2,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "customer" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },

  title: "Total Customer",
  class: "total-customer",
  chartclass: "customer-chart",
  price: "62,828",
  arrowicon: "arrow-chart",
  icon: "Customer",
  percentage: "-24%",
  color: "danger",
};

export const TotalProduct: TotalRevenueChart = {
  series: [
    {
      name: "Desktops",
      data: [
        50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66,
        66,
      ],
    },
  ],
  chart: {
    height: 100,
    type: "area",
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
      color: "#44A8D7",
      opacity: 0.2,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  tooltip: {
    enabled: false,
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
    curve: "straight",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: "#44A8D7",
        strokeColor: "#44A8D7",
        size: 5,
        shape: "circle",
      },
    ],
  },

  title: "Total Product",
  class: "total-product",
  chartclass: "total-product-chart",
  price: "72,982",
  arrowicon: "arrow-chart-up",
  icon: "Product",
  percentage: "+42%",
  color: "success",
};

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
export const DailyVisitor: DailyVisitorChart = {
  chart: {
    height: 200,
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
      formatter: function (val: number) {
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

export interface TopCategoriesChartOptions {
  chart: ApexChart;
  series: number[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  grid?: { padding?: { bottom?: number } };
}

export const TopCategoriesChart: TopCategoriesChartOptions = {
  series: [80, 55, 44],
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "75%",
        labels: {
          show: true,
          name: {
            offsetY: -10,
          },
          value: {
            offsetY: -50,
          },
          total: {
            show: true,
            fontSize: "18px",
            fontFamily: "Outfit",
            fontWeight: 500,
            label: "Product Sales",
            color: "#959595",
            formatter: (_w: string) => "14,937",
          },
        },
      },
      // customScale: 1,
      offsetX: 0,
      //   offsetY: 0,
    },
  },
  grid: {
    padding: {
      bottom: -120,
    },
  },
  colors: [primary_color, secondary_color, "#61AE41"],
  responsive: [
    {
      breakpoint: 1800,
      options: {
        chart: {
          height: 392,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 350,
        },
      },
    },
    {
      breakpoint: 1401,
      options: {
        chart: {
          height: 275,
        },
      },
    },
  ],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

export interface ProductSalesChartOptions {
  chart: ApexChart;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
}

export const productSalesChart: ProductSalesChartOptions = {
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
    height: 270,
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

export interface StockReportsChartOptions {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  colors: string[];
}
export const StockReports: StockReportsChartOptions = {
  chart: {
    height: 285,
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
      formatter: function (val: number) {
        return "$ " + val + " thousands";
      },
    },
  },
  colors: [primary_color, secondary_color, "#51bb25"],
};
