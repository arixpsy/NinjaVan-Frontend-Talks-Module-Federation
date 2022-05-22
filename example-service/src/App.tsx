import React from "react";
import ReactDOM from "react-dom";
import ExampleServiceHome from "./Containers/ExampleServiceHome";

import "./index.css";

const App = () => (
  <div style={{ height: "100vh" }}>
    <ExampleServiceHome />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
