import { Button } from "react-bootstrap";
import { useState } from "react";

function StateFun() {

    let [count, setCount] = useState(1);

    return (
        <div>
            <h1>State Function with Component : {count}</h1>

            <Button onClick={()=>setCount(count + 1)} >upadate state</Button>
        </div>
    )
}
export default StateFun;