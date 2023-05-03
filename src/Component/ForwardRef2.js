import { forwardRef } from "react";

function ForwardRef2(props, customRef){
    return(
        <>
        <input type="text" ref={customRef}/>
        </>
    )

}
export default forwardRef(ForwardRef2);