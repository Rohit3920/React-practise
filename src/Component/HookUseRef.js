import { useRef } from "react";
import { Button } from "react-bootstrap";

function HookUseRef(){

    const inputRef = useRef(null);

    const handleInput = () =>{
        console.warn("this is a useRef Hook");
        inputRef.current.value = "rohit";
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "skyblue"
    }

    return(
        <div>
            <h1>useRef Hook in React js</h1>

            <input type="text" ref={inputRef} placeholder="handle with useRef Hook" />

            <Button type="button" onClick={handleInput}>Click me</Button>
        </div>
    )

}

export default HookUseRef;