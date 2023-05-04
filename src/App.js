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
import ReUseComponent from './Component/ReUseComponent';
import LineCode from './Component/LineCode';
import HookUseMemo from './Component/HookUseMemo';
import RefClass from './Component/RefClass';
import HookUseRef from './Component/HookUseRef';
import ForwardRef1 from './Component/ForwardRef1';
import ControlledComponent from './Component/ControlledComponent';
import UnControlledComponent from './Component/UnControlledComponent';
import HOCComponent from './Component/HOCComponent';

function App() {

  function alertBox() {
    alert("Hello Mr. User. Welcome")
  }

  return (
    <div className="App">
      <h1>Hello!!! I`m Web Developer ROHIT, React User</h1>
      <LineCode />
      <Login />

      <LineCode />
      <Random />       {/* Example for random Number under 6 */}


      <LineCode />
      <ClickEventFun /><br />

      <LineCode />
      <StateFun /><br />

      <LineCode />
      <StateCls /> <br />

      <LineCode />
      <PropFun name={"Rohit"} email={"rohit@test.com"} other={{ address: "Kolhapur" }} /> <br />

      <LineCode />
      <PropsClass name={"Rohit Nittawadekar"} /><br />


      <LineCode />
      <GetInputValue /><br />

      <LineCode />
      <HideShowElement /><br />

      <LineCode />
      <BasicForm /><br />

      <LineCode />
      <CondRendering /><br />

      <LineCode />
      <FormValidation />

      <LineCode />
      <PassfunProps data={alertBox} />

      <LineCode />
      <ConstructorLCM />

      <LineCode />
      <RenderLCM />

      <LineCode />
      <ComponentDidMountCls />

      <LineCode />
      <ComponentDidUpdateCls />

      <LineCode />
      <ShouldComponentUpdateCls />

      <LineCode />
      <HookUseEffect />

      <LineCode />
      <Styling />

      <LineCode />
      <HandleArray />

      <LineCode />
      <ReUseComponent />

      <LineCode />
      <HookUseMemo />

      <LineCode />
      <RefClass />

      <LineCode />
      <HookUseRef />

      <LineCode />
    <ForwardRef1 />

    <LineCode />
    <ControlledComponent />

    <LineCode />
    {/* <UnControlledComponent /> */}

    <LineCode />
    <HOCComponent/>


      {/* <BrowserRouter >
    <Routes>
      <Route path= "/" element={<h1>Hello Router </h1>}/>
    </Routes>
    </BrowserRouter> */}

    </div>
  );
}

export default App;
