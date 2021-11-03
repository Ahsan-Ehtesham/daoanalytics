import "./App.css";
import "./styles/css/style.min.css";
import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import BodySection from "./components/BodySection";
import Chart from "./components/Chart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [holders, setHolders] = useState([]);
  const [rates, setRates] = useState([]);

  //Add btn function
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  // Minus btn function
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  const getTokenHolders = async () => {
    const holderUrl = "https://api.covalenthq.com/v1/1/tokens/0xD417144312DbF50465b1C641d016962017Ef6240/token_holders/?key=ckey_3ef3cefb5f2447cabfdc7d26599&page-size=10";

    const response = await fetch(holderUrl);
    const parsedData = await response.json();
    console.log(parsedData.data.items);
    setHolders(parsedData.data.items);
  };

  const getRateRequest = async () => {
    const rateUrl = "https://api.covalenthq.com/v1/pricing/tickers/?tickers=usd%2Ceth%2Cbnb%2Cbtc&key=ckey_3ef3cefb5f2447cabfdc7d26599";

    const response = await fetch(rateUrl);
    const parsedData = await response.json();
    console.log(parsedData.data.items);
    setRates(parsedData.data.items);
  };

  useEffect(() => {
    getTokenHolders();
    getRateRequest();
  }, []);

  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Sidebar />
            <BodySection holders={holders} rates={rates}/>
          </Route>
        </Switch>
      </Router> */}
      <Chart/>
    </>
  );
};

export default App;
