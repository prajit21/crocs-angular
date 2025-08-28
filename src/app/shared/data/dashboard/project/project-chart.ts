import {
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexResponsive,
  ApexAxisChartSeries,
  ApexFill,
  ApexTheme,
  ApexMarkers,
  ApexStates,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#5C61F2";
let secondary_color = localStorage.getItem("secondary_color") || "#FF9766";

export interface TotalRevenueProjectChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  stroke: ApexStroke;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}
export const TotalRevenueProject: TotalRevenueProjectChart = {
  series: [
    {
      name: "Earning",
      data: [78, 45, 60, 78, 78, 45, 25, 50, 60, 60, 78, 40],
    },
    {
      name: "Expense",
      data: [-70, -70, -40, -30, -70, -30, -25, -45, -40, -50, -70, -50],
    },
  ],
  chart: {
    type: "bar",
    height: 316,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: [primary_color, secondary_color],
  plotOptions: {
    bar: {
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 10,
    colors: ["#fff"],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val.toString();
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
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
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1501,
      options: {
        chart: {
          height: 298,
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "150%",
          },
        },
      },
    },
  ],
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
};

export interface ApexMonthlyChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

export const monthlyChart: ApexMonthlyChartOptions = {
  series: [
    {
      name: "Total",
      data: [10, 5, 10, 7, 40, 20, 30, 27, 40],
    },
  ],
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
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
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {},
    z: {},
    marker: {
      show: false,
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
    tooltip: {
      enabled: false,
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
};

function generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number },
) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export interface ProjectStatisticsChartOptions {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  theme: ApexTheme;
  colors: string[];
  tooltip: ApexTooltip;
}
export const ProjectStatisticsChart: ProjectStatisticsChartOptions = {
  chart: {
    height: 252,
    type: "bubble",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Product1",
      data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
        min: 20,
        max: 55,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
        min: 10,
        max: 55,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
        min: 10,
        max: 55,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
        min: 10,
        max: 55,
      }),
    },
  ],
  fill: {
    type: "gradient",
  },
  legend: {
    show: false,
  },
  xaxis: {
    tickAmount: 12,
    type: "datetime",
    labels: {
      rotate: 0,
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
      formatter: function (value: number) {
        return value.toString();
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  theme: {
    palette: "palette2",
  },
  colors: [primary_color, secondary_color, "#61AE41"],
  tooltip: {
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      w.globals.initialSeries[seriesIndex].data[dataPointIndex];
      return (
        '<ul class="p-2">' +
        "<li><b>Order</b>: " +
        w.globals.labels[dataPointIndex] +
        "</li>" +
        "</ul>"
      );
    },
  },
};

export interface ProjectDeliveriesChartOptions {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  colors: string[];
  series: ApexAxisChartSeries;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}
export const ProjectDeliveriesChart: ProjectDeliveriesChartOptions = {
  series: [
    {
      name: "This Month ",
      type: "area",
      data: [215, 260, 360, 420, 320, 280, 360],
    },
    {
      name: "This Month",
      type: "area",
      data: [90, 130, 280, 350, 400, 350, 400],
    },
  ],
  chart: {
    height: 330,
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
    width: [3, 3],
    curve: "straight",
    dashArray: [0, 6],
  },
  colors: [secondary_color, primary_color],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: secondary_color,
        size: 5,
        shape: "circle",
      },
    ],
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
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
    labels: {
      formatter: function (val: number) {
        return val + "" + "k";
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  fill: {
    colors: [secondary_color, primary_color],
    type: ["gradient", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 0, 0],
    },
  },
  grid: {
    borderColor: "#f1f1f1",
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
        "Deliveries" +
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

export interface CommonWidget {
  series: number[];
  chart: ApexChart;
  colors: string[];
  legend: ApexLegend;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  states: ApexStates;
}

export const commenwidget1: CommonWidget = {
  series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 60,
    width: 60,
  },
  colors: [
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    primary_color,
    "#ced0fb",
    "#ced0fb",
    "#ced0fb",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
            formatter: function (val: string) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
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
};

export const commenwidget2: CommonWidget = {
  series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 55,
    width: 55,
  },
  colors: [
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
            formatter: function (val: string) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
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
};

export const commenwidget3: CommonWidget = {
  series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 55,
    width: 55,
  },
  colors: [
    secondary_color,
    secondary_color,
    secondary_color,
    secondary_color,
    secondary_color,
    secondary_color,
    secondary_color,
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
            formatter: function (val: string) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
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
};
export const commenwidget4: CommonWidget = {
  series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 55,
    width: 55,
  },
  colors: [
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
            formatter: function (val: string) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
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
};
