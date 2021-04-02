import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import reactDom from "react-dom";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Drink extends Component {
  state = {
    randomDrink: [],
  };

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Drunken Insults</h1>
        <p>helping your drunk ass fight back since 1988</p>
        <Button className="Btn" variant="contained" color="primary">
          Hello World
        </Button>
        <button>wah</button>
      </div>
    );
  }
}

export default Drink;
