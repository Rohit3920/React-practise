import { Link } from "react-router-dom";
import React from 'react';
import "./style.css"

function Layout() {
    return (
        <div className="Link_List">
            <Link className="Link" to="/Login">Login</Link>
            <Link className="Link" to="/ClickEventFun">ClickEventFun</Link>
            <Link className="Link" to="/StateFun">StateFun</Link>
            <Link className="Link" to="/StateCls">StateCls</Link>
            <Link className="Link" to="/PropFun">PropFun</Link>
            <Link className="Link" to="/PropsClass">PropsClass</Link>
            <Link className="Link" to="/GetInputValue">GetInputValue</Link>
            <Link className="Link" to="/HideShowElement">HideShowElement</Link>
            <Link className="Link" to="/BasicForm">BasicForm</Link>
            <Link className="Link" to="/CondRendering">CondRendering</Link>
            <Link className="Link" to="/FormValidation">FormValidation</Link>
            <Link className="Link" to="/PassfunProps">PassfunProps</Link>
            <Link className="Link" to="/ConstructorLCM">ConstructorLCM</Link>
            <Link className="Link" to="/RenderLCM">RenderLCM</Link>
            <Link className="Link" to="/ComponentDidMountCls">ComponentDidMountCls</Link>
            <Link className="Link" to="/ShouldComponentUpdateCls">ShouldComponentUpdateCls</Link>
            <Link className="Link" to="/HookUseEffect">HookUseEffect</Link>
            <Link className="Link" to="/Styling">Styling</Link>
            <Link className="Link" to="/HandleArray">HandleArray</Link>
            <Link className="Link" to="/ReUseComponent">ReUseComponent</Link>
            <Link className="Link" to="/HookUseMemo">HookUseMemo</Link>
            <Link className="Link" to="/RefClass">RefClass</Link>
            <Link className="Link" to="/HookUseRef">HookUseRef</Link>
            <Link className="Link" to="/ForwardRef1">ForwardRef1</Link>
            <Link className="Link" to="/ControlledComponent">ControlledComponent</Link>
            <Link className="Link" to="/UnControlledComponent">UnControlledComponent</Link>
            <Link className="Link" to="/HOCComponent">HOCComponent</Link>

        </div>
    )
}

export default Layout;