import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Drink from "./components/Drink/Drink.jsx";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/uploads" component={Uploads} />
          <Route path="/videos/:id" component={Video} /> */}
          <Route exact path="/drinks" component={Drink}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
