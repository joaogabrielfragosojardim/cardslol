import React from "react";
import "./App.css";
import "./champs.css";
import FechApi from "./fetchAPI";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <FechApi />
      </Router>
    </div>
  );
}
export default App;
