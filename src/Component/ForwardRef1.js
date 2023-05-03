import { useRef } from "react";
import ForwardRef2 from "./ForwardRef2";
import { Button } from "react-bootstrap";

function ForwardRef1(){

    const inputRef = useRef(null);

    const update = () =>{
        inputRef.current.value = '1000';
    }

    return(
        <div>
            <h1>ForwardRef in React</h1>

            <ForwardRef2 ref={inputRef}/>
            <Button type="button" onClick={update}>Forward</Button>
        </div>
    )
}
export default ForwardRef1;