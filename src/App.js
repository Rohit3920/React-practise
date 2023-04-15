// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Login from './Component/Login';
import ClickEventFun from './Component/ClickEventFun'
import StateFun from './Component/StateFun'
import StateCls from './Component/StateCls';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Login /> */}

      <ClickEventFun /><br/>
      <StateFun /><br/>
      <StateCls /> <br/>
    </div>
  );
}

export default App;
