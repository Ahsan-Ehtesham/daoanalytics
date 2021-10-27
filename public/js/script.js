// Initialize the echarts instance based on the prepared dom
let myChart = echarts.init(document.getElementById("myChart"));

// Specify the configuration items and data for the chart
let option = {
  title: {
    text: "ECharts Getting Started Example",
  },
  tooltip: {},
  legend: {
    data: ["sales"],
  },
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
