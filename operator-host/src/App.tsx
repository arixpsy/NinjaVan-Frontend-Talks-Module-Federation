import React from "react";
import ReactDOM from "react-dom";
import Card from 'commons/Components/Card'
import { DataUtils } from 'commons/Utils'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: operator-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Card name='Operator'></Card>
    {JSON.stringify(DataUtils.toSnakeCase({
      myKey: 'value',
      testKey: 'value'
    }))}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
