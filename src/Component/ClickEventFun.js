//Lec 10 
// import react from "react";
import { Button } from "react-bootstrap";

function ClickEventFun() {

    function alertMsg() {
        alert("Click Event Function")
    }

    return (
        <>
            <h1>click Event Function</h1>

            <Button onClick={alertMsg}>Show Alert</Button>
        </>
    )

}
export default ClickEventFun;