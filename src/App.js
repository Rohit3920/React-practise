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
import CondRendering from './Component/CondRendering'
import FormValidation from './Component/FormValidation';
import PassfunProps from './Component/PassfunProps'

function App() {

  function alertBox(){
    alert("Hello Mr. User. Welcome")
  }

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

    <CondRendering /><br />

    <FormValidation />

    <PassfunProps data= {alertBox}/>

    </div>
  );
}

export default App;
