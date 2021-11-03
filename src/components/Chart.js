import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
    const [chartData, setChartData] = useState({});
    const chart = () => {
      let empSal = [];
      let empAge = [];
      axios
        .get(
          "https://api.covalenthq.com/v1/1/address/0x0f51bb10119727a7e5ea3538074fb341f56b09ad/portfolio_v2/?key=ckey_3ef3cefb5f2447cabfdc7d26599"
        )
        .then((res) => {
          console.log(res);
          for (const dataObj of res.data.items[0].holdings[0]) {
            empSal.push(parseInt(dataObj.quote_rate));
            empAge.push(parseInt(dataObj.timestamp));
          }
          setChartData({
            labels: empSal,
            datasets: [
              {
                label: "level of thiccness",
                data: empAge,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4,
              }
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(empSal, empAge);
    };
  
    useEffect(() => {
      chart();
    }, []);
  
    
//   const [chartData, setChartData] = useState({});
//   // const [employeeSalary, setEmployeeSalary] = useState([]);
//   // const [employeeAge, setEmployeeAge] = useState([]);

//   //  const Chart = () => {
//   //         let empSal = [];
//   //         let empAge = [];

//   //         axios.get("https://random-data-api.com/api/users/random_user?size=5")
//   //         .then(res => {
//   //             console.log(res.data.data);
//   //             for(const dataObj of res.data.data){
//   //                 empSal.push(parseInt(dataObj.id));
//   //                 empAge.push(parseInt(dataObj.gender));

//   //             }
//   //             setChartData({
//   //                 labels: empAge,
//   //                 datasets: [{
//   //                                              label: 'level of thicceness',
//   //                                              data: empSal,
//   //                                              backgroundColor: [
//   //                                                  'rgba(255, 99, 132, 0.2)',
//   //                                                  'rgba(54, 162, 235, 0.2)',
//   //                                                  'rgba(255, 206, 86, 0.2)',
//   //                                                  'rgba(75, 192, 192, 0.2)',
//   //                                                  'rgba(153, 102, 255, 0.2)',
//   //                                                  'rgba(255, 159, 64, 0.2)',
//   //                                                  'rgba(255, 99, 132, 0.2)',
//   //                                                  'rgba(54, 162, 235, 0.2)',
//   //                                                  'rgba(255, 206, 86, 0.2)',
//   //                                                  'rgba(75, 192, 192, 0.2)',
//   //                                                  'rgba(153, 102, 255, 0.2)',
//   //                                                  'rgba(255, 159, 64, 0.2)',
//   //                                                  'rgba(255, 99, 132, 0.2)',
//   //                                                  'rgba(54, 162, 235, 0.2)',
//   //                                                  'rgba(255, 206, 86, 0.2)',
//   //                                                  'rgba(75, 192, 192, 0.2)',
//   //                                                  'rgba(153, 102, 255, 0.2)',
//   //                                                  'rgba(255, 159, 64, 0.2)',
//   //                                                  'rgba(255, 99, 132, 0.2)',
//   //                                                  'rgba(54, 162, 235, 0.2)',
//   //                                                  'rgba(255, 206, 86, 0.2)',
//   //                                                  'rgba(75, 192, 192, 0.2)',
//   //                                                  'rgba(153, 102, 255, 0.2)',
//   //                                                  'rgba(255, 159, 64, 0.2)',
//   //                                              ],
//   //                                              borderColor: [
//   //                                                  'rgba(255, 99, 132, 1)',
//   //                                                  'rgba(54, 162, 235, 1)',
//   //                                                  'rgba(255, 206, 86, 1)',
//   //                                                  'rgba(75, 192, 192, 1)',
//   //                                                  'rgba(153, 102, 255, 1)',
//   //                                                  'rgba(255, 159, 64, 1)',
//   //                                                  'rgba(255, 99, 132, 1)',
//   //                                                  'rgba(54, 162, 235, 1)',
//   //                                                  'rgba(255, 206, 86, 1)',
//   //                                                  'rgba(75, 192, 192, 1)',
//   //                                                  'rgba(153, 102, 255, 1)',
//   //                                                  'rgba(255, 159, 64, 1)',
//   //                                                  'rgba(255, 99, 132, 1)',
//   //                                                  'rgba(54, 162, 235, 1)',
//   //                                                  'rgba(255, 206, 86, 1)',
//   //                                                  'rgba(75, 192, 192, 1)',
//   //                                                  'rgba(153, 102, 255, 1)',
//   //                                                  'rgba(255, 159, 64, 1)',
//   //                                                  'rgba(255, 99, 132, 1)',
//   //                                                  'rgba(54, 162, 235, 1)',
//   //                                                  'rgba(255, 206, 86, 1)',
//   //                                                  'rgba(75, 192, 192, 1)',
//   //                                                  'rgba(153, 102, 255, 1)',
//   //                                                  'rgba(255, 159, 64, 1)',
//   //                                              ],
//   //                                              borderWidth: 1
//   //                                          }]
//   //             });
//   //         })
//   //         .catch(err =>{
//   //             console.log(err);
//   //         })

//   //     }""

//   useEffect(() => {
//     const fetchPrices = async () => {
//       const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
//       const data = await res.json();
//       setChartData({
//         labels: data.data.map((crypto) => crypto.name),
//         datasets: [
//           {
//             label: "Price in USD",
//             data: data.data.map((crypto) => crypto.priceUsd),
//             backgroundColor: [
//               "#ffbb11",
//               "#ecf0f1",
//               "#50AF95",
//               "#f3ba2f",
//               "#2a71d0",
//             ],
//           },
//         ],
//       });
//     };
//     fetchPrices();
//   }, []);

  return (
    <div className="App">
<section className="col-md-9 ms-sm-auto col-lg-10 px-md-3">
<div>
  <Line
    data={chartData}
    options={{
      responsive: true,
      title: { text: "THICCNESS SCALE", display: true },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    }}
  />
</div>
</section>
     
    </div>
  );
};

export default Chart;
