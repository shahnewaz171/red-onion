import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import "./Foods.css";

const Foods = (props) => {
  const [foods, setFoods] = useState([]);
  const [foodType, setFoodType] = useState("lunch");

  useEffect(() => {
    fetch("https://red-onion-server-n2qw.onrender.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  const selectedFoods = foods
    .filter((food) => food.category === foodType)
    .slice(0, 6);
  const cart = props.cart[0];

  return (
    <div className="container mt-4 mb-5">
      <nav>
        <ul className="nav justify-content-center item-title">
          <li onClick={() => setFoodType("breakfast")} className="nav-item">
            <Link
              to="#"
              className={
                foodType === "breakfast"
                  ? "nav-link active m-0"
                  : "nav-link m-0"
              }
            >
              Breakfast
            </Link>
          </li>
          <li onClick={() => setFoodType("lunch")} className="nav-item">
            <Link
              to="#"
              className={
                foodType === "lunch" ? "nav-link active m-0" : "nav-link m-0"
              }
            >
              Lunch
            </Link>
          </li>
          <li onClick={() => setFoodType("dinner")} className="nav-item">
            <Link
              to="#"
              className={
                foodType === "dinner" ? "nav-link active m-0" : "nav-link m-0"
              }
            >
              Dinner
            </Link>
          </li>
        </ul>
      </nav>

      <div className="row my-5 pt-2">
        {selectedFoods.map((food) => (
          <FoodItem
            food={food}
            key={food.key}
            handleFoodCart={props.handleFoodCart}
            cart={props.cart}
          ></FoodItem>
        ))}
      </div>

      <div className="text-center pb-4">
        {props.cart.length ? (
          <Link to="#">
            <button className="btn btn-style">Checkout Your Food</button>
          </Link>
        ) : (
          <button disabled className="btn btn-secondary">
            Checkout Your Food
          </button>
        )}
      </div>
    </div>
  );
};

export default Foods;
