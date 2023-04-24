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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConstructorLCM from './Component/ConstructorLCM';

function App() {

  function alertBox(){
    alert("Hello Mr. User. Welcome")
  }

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Login /> */}
      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <ClickEventFun /><br/> 

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <StateFun /><br/>

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <StateCls /> <br/>

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <PropFun name = {"Rohit"} email={"rohit@test.com"} other = {{address : "Kolhapur"}}/> <br/>

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <PropsClass name= {"Rohit Nittawadekar"}/><br/>


    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <GetInputValue /><br />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <HideShowElement /><br />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <BasicForm /><br />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <CondRendering /><br />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <FormValidation />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <PassfunProps data= {alertBox}/>

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <ConstructorLCM />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>


    {/* <BrowserRouter >
    <Routes>
      <Route path= "/" element={<h1>Hello Router </h1>}/>
    </Routes>
    </BrowserRouter> */}

    </div>
  );
}

export default App;
