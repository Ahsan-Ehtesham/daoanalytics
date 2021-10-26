import "./App.css";
import "./styles/css/style.min.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BodySection from "./components/BodySection";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);

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

  const getProductRequest = async () => {
    const productUrl = "https://fakestoreapi.com/products";

    const response = await fetch(productUrl);
    const parsedData = await response.json();
    console.log(parsedData);
    setProducts(parsedData);
  };

  // const getSalesRequest = async () => {
  //   const salesUrl = "https://random-data-api.com/api/users/random_user?size=5";

  //   const response = await fetch(salesUrl);
  //   const parsedData = await response.json();
  //   console.log(parsedData);
  //   setSales(parsedData);
  // };

  useEffect(() => {
    getProductRequest();
    // getSalesRequest();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Sidebar />
            <BodySection products={products} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
