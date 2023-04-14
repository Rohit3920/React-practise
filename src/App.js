// import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import React from 'react';
// import Login from './Component/Login';
import ClickEventFun from './Component/ClickEventFun'
import StateFun from './Component/StateFun'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Login /> */}

      <ClickEventFun /><br/>
      <StateFun /><br/>
    </div>
  );
}

export default App;
