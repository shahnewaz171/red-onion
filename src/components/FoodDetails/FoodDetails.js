import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Food from "../Food/Food";
import Footer from "../Footer/Footer";
import "./FoodDetails.css";

const FoodDetails = (props) => {
  const { foodKey } = useParams();
  const [singleFood, setSingleFood] = useState([]);
  const cartId = props.cart[0];

  useEffect(() => {
    fetch("https://red-onion-server-n2qw.onrender.com/singleFood/" + foodKey)
      .then((res) => res.json())
      .then((data) => {
        setSingleFood(data);
      });
  }, [foodKey]);

  return (
    <div>
      <Food
        food={singleFood}
        cartId={cartId}
        cart={props.cart}
        handleCart={props.handleCart}
      ></Food>
      <Footer></Footer>
    </div>
  );
};

export default FoodDetails;
