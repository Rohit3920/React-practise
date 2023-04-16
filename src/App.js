// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Login from './Component/Login';
import ClickEventFun from './Component/ClickEventFun'
import StateFun from './Component/StateFun'
import StateCls from './Component/StateCls';
import PropFun from './Component/PropFun';
import PropsClass from './Component/PropsClass'
import GetInputValue from './Component/GetInputValue'
import HideShowElement from './Component/HideShowElement';
import BasicForm from './Component/BasicForm';

function App() {

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Login /> */}

      <ClickEventFun /><br/> 

      <StateFun /><br/>

      <StateCls /> <br/>

    <PropFun name = {"Rohit"} email={"rohit@test.com"} other = {{address : "Kolhapur"}}/> <br/>

    <PropsClass name= {"Rohit Nittawadekar"}/><br/>

    <GetInputValue /><br />

    <HideShowElement /><br />

    <BasicForm /><br />

    

    </div>
  );
}

export default App;
