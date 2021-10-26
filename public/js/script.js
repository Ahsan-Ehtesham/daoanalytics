// // Initialize the echarts instance based on the prepared dom
// let myChart = echarts.init(document.getElementById("myChart"));

// // Specify the configuration items and data for the chart
// let option = {
//   title: {
//     text: "ECharts Getting Started Example",
//   },
//   tooltip: {},
//   legend: {
//     data: ["sales"],
//   },
//   xAxis: {
//     data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
//   },
//   yAxis: {},
//   series: [
//     {
//       name: "sales",
//       type: "bar",
//       data: [5, 20, 36, 10, 10, 20],
//     },
//   ],
// };

// // Display the chart using the configuration items and data just specified.
// myChart.setOption(option);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });
}); // DOMContentLoaded end
