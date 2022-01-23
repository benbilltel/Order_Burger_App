import React, { Component } from "react";
import "../Css/Burger_App.css";
import Bill from "./Bill.js";
import Topping from "./Topping";
export default class Burger_App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Burger app</h1>
        <div className="row">
          <div className="col-7 burger">
            <h1 className="title_left">your burger</h1>
            <div className="breadTop"></div>
            <Topping />
            <div className="breadBottom"></div>
          </div>
          <div className="col-5 bill">
            <Bill />
          </div>
        </div>
      </div>
    );
  }
}
