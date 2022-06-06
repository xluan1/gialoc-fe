import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Cart_content from "./cart_content";
import Cart_policy from "./cart_policy";

// const Shopping_cart = ({ cart, setCart, handleChange }) => {
const Shopping_cart = () => {
  // const [name, setName] = useState();
  // const [manufacturer, setManufacturer] = useState();
  // const [insurance, setInsurance] = useState();
  // const [delivery_time, setDelivery_time] = useState();
  // const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.filter((product) => product.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };

  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((product) => (ans += product.amount * product.price));
  //   setPrice(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });

  return (
    <div>
      <Header />

      <Cart_content />

      <Cart_policy />

      <Footer />
    </div>
  );
};

export default Shopping_cart;
