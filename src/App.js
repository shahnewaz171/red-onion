import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Shipment from "./components/Shipment/Shipment";
import ShipmentDetails from "./components/ShipmentDetails/ShipmentDetails";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/shipment">
          <Shipment />
        </Route>
        <Route path="/shipmentDetails">
          <ShipmentDetails />
        </Route>
        <Route path="/food/:foodKey">
          <FoodDetails />
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
