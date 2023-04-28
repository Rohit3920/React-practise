// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Component/Login';
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
import RenderLCM from './Component/RenderLCM';
import ComponentDidMountCls from './Component/ComponentDidMountCls';
import Random from './Component/Random';
import ComponentDidUpdateCls from './Component/ComponentDidUpdateCls';
import ShouldComponentUpdateCls from './Component/ShouldComponentUpdateCls';
import HookUseEffect from './Component/HookUseEffect';
import Styling from './Component/Styling';
import HandleArray from './Component/HandleArray';

function App() {

  function alertBox() {
    alert("Hello Mr. User. Welcome")
  }

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Login />

      {/* <Random /> */}         //Example for random Number under 6
      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <ClickEventFun /><br />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <StateFun /><br />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <StateCls /> <br />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <PropFun name={"Rohit"} email={"rohit@test.com"} other={{ address: "Kolhapur" }} /> <br />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <PropsClass name={"Rohit Nittawadekar"} /><br />


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

      <PassfunProps data={alertBox} />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <ConstructorLCM />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>


      <RenderLCM />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      <ComponentDidMountCls />

      <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <ComponentDidUpdateCls />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <ShouldComponentUpdateCls />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <HookUseEffect />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <Styling />

    <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________</p>

    <HandleArray />



      {/* <BrowserRouter >
    <Routes>
      <Route path= "/" element={<h1>Hello Router </h1>}/>
    </Routes>
    </BrowserRouter> */}

    </div>
  );
}

export default App;
