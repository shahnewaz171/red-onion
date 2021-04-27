import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';
import { getDatabaseCart, addToDatabaseCart } from './utilities/databaseManager';
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Shipment from "./components/Shipment/Shipment";
import ShipmentDetails from "./components/ShipmentDetails/ShipmentDetails";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";


function App() {
  const [cart , setCart] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/foods')
    .then(res => res.json())
    .then(data => {
        setFoods(data);
    })
}, [])

  useEffect(() => {
    const saveCart = getDatabaseCart(); 
    const foodProductKey = Object.keys(saveCart);
    if(foods.length){
      const cardFoods = foodProductKey.map(key => {
        const food = foods.find(fd => fd.key === key);
        food.quantity = saveCart[key];
        return food;
      })
      setCart(cardFoods);
    }
  }, [])

  const handleFoodCart = (food) => {
    const sameFood = cart.find(fd => fd.key === food.key);
    let count = 1, newCart;
    if(sameFood){
      count = sameFood.quantity + 1;
      sameFood.quantity = count;
      const othersFood = cart.filter(fd => fd.key !== food.key);
      newCart = [...othersFood, sameFood];
    }
    else{
      food.quantity = 1;
      newCart =[...cart, food];
    }
    setCart(newCart);
    addToDatabaseCart(food.id, count);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar cart={cart} />
          <Header></Header>
          <Foods  handleFoodCart={handleFoodCart} cart={cart}></Foods>
          <Home />
        </Route>
        <Route path="/shipment">
          <Navbar cart={cart} />
          <Shipment />
        </Route>
        <Route path="/shipmentDetails">
          <Navbar cart={cart} />
          <ShipmentDetails />
        </Route>
        <Route path="/food/:foodKey">
          <Navbar cart={cart} />
          <FoodDetails handleFoodCart={handleFoodCart} cart={cart}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
