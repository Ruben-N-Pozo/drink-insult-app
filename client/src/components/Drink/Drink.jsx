import React, { Component } from "react";

import "./Drink.scss"
// import reactDom from "react-dom";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Drink extends Component {
  state = {
    randomDrink: '',
    randomImg: '',
    randomInsult: ''
  };

getInsults = () => {
  axios.get("/insult")
  .then((res)=> this.setState({randomInsult:res.data.insult}))
}
refresh = (e) => {
e.location.reload()

}

  componentDidMount() {
    this.getInsults()
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => 
        
        this.setState({randomDrink:res.data.drinks[0].strDrink, randomImg: res.data.drinks[0].strDrinkThumb})
        )
      .catch((err) => {
        console.log(err);
      });}
  

  render() {
    return (
      <div className="App">
        <h1>Drunken Insults</h1>
        <p>helping your drunk ass fight back since 1988</p>

        
        <img src={this.state.randomImg} alt="#" />

        <p>{this.state.randomDrink}</p>
        <p>{this.state.randomInsult}</p>

        <button onClick=''>new insult</button>

      </div>
    );
  }
}

export default Drink;
