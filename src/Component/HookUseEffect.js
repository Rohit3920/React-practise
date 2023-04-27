import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function HookUseEffect(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(" Use Effect CALLED", count)
        }, count*1000);
    })

    return(
        <div>
            <h1>React Hook : UseEffect {count}</h1>
            <p> useEffect are React HOOK and setTimeOut function called</p>

        <Button onClick={()=> { setCount(count+1)}}>Incre-Counter</Button>

        </div>
    )

}

export default HookUseEffect;