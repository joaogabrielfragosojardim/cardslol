import React from "react";
import "./App.css";
import "./style/champions.css";
import Dashboard from "./components/layout/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Champion from "./components/champions/Champion"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Dashboard}/>
        <Route exact path="/:championIndex" component={Champion}/>
      </Switch>
    </Router>
  );
}
export default App;
