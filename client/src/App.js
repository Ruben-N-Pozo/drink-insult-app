import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Drink from "./components/Drink/Drink.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Drink} />
          {/* <Route exact path="/uploads" component={Uploads} />
          <Route path="/videos/:id" component={Video} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
