import { Button } from "react-bootstrap";
import { useState } from "react";

function StateFun() {

    let [count, setCount] = useState(1);

    return (
        <>
            <h1>State with Function Component : {count}</h1>

            <Button onClick={()=>setCount(count + 1)} >upadate state</Button>
        </>
    )
}
export default StateFun;