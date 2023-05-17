// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Component/Home';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/login" element={<Login />} />

          <Route path="/ClickEventFun" element={<ClickEventFun />}/>

          <Route path="/StateFun" element={<StateFun />}/>

          <Route path="/StateCls" element={<StateCls />}/>

          <Route path="/PropFun" element={<PropFun name={"Rohit"} email={"rohit@test.com"} other={{ address: "Kolhapur" }} />}/>

          <Route path="/PropsClass" element={<PropsClass name={"Rohit Nittawadekar"}/>}/>

          <Route path="/GetInputValue" element={<GetInputValue />}/>

          <Route path="/HideShowElement" element={<HideShowElement />}/>

          <Route path="/BasicForm" element={<BasicForm />}/>

          <Route path="/CondRendering" element={<CondRendering />}/>

          <Route path="/FormValidation" element={<FormValidation />}/>

          <Route path="/PassfunProps" element={<PassfunProps data={alertBox}/>}/>

          <Route path="/ConstructorLCM" element={<ConstructorLCM />}/>

          <Route path="/RenderLCM" element={<RenderLCM />}/>

          <Route path="/ComponentDidMountCls" element={<ComponentDidMountCls />}/>

          <Route path="/Random" element={<Random />}/>

          <Route path="/ComponentDidUpdateCls" element={<ComponentDidUpdateCls />}/>

          <Route path="/ShouldComponentUpdateCls" element={<ShouldComponentUpdateCls />}/>

          <Route path="/HookUseEffect" element={<HookUseEffect />}/>

          <Route path="/Styling" element={<Styling />}/>

          <Route path="/HandleArray" element={<HandleArray />}/>

          <Route path="/ReUseComponent" element={<ReUseComponent />}/>

          <Route path="/LineCode" element={<LineCode />}/>

          <Route path="/HookUseMemo" element={<HookUseMemo />}/>

          <Route path="/RefClass" element={<RefClass />}/>

          <Route path="/HookUseRef" element={<HookUseRef />}/>

          <Route path="/ForwardRef1" element={<ForwardRef1 />}/>

          <Route path="/ControlledComponent" element={<ControlledComponent />}/>

          <Route path="/UnControlledComponent" element={<UnControlledComponent />}/>
          
          <Route path="/HOCComponent" element={<HOCComponent />}/>

        </Routes>
      </Router>




    </div>
  );
}

export default App;
