import { useState } from "react";
import { Button } from "react-bootstrap";

function HideShowElement(){

    const [status, setStatus] = useState(false);

    function show(){
        setStatus(true)
    }

    function hide(){
        setStatus(false)
    }

    function toggleEvent(){
        setStatus(!status)
    }

    return(
        <>
            <h1>Hide & Show Element : {
                status ?
                    <span className="main">Hello ROHIT</span>
                    : null
            }</h1>

<Button variant="dark" onClick={show}>Show Btn</Button>
<Button variant="secondary" onClick={hide}>Hide Btn</Button>
<Button onClick={toggleEvent}>toggleBtn</Button>

        </>
    )

}

export default HideShowElement;