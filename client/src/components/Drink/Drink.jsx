import React, { Component } from "react";

import "./Drink.scss"
// import reactDom from "react-dom";
import axios from "axios";


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
refreshpage = () => {
  window.location.reload();
};

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
      <div className="drinkDiv">
        <h1>Drunken Insults</h1>
        <h3>Helping your drunk ass fight back since 1988</h3>

        
        <img src={this.state.randomImg} alt="#" />
        <h3>Your New Drink</h3>
        <p>{this.state.randomDrink}</p>
        <h3>Your New Insult</h3>
        <p>{this.state.randomInsult}</p>

        <button onClick={() => this.refreshpage()}>new insult</button>

      </div>
    );
  }
}

export default Drink;
