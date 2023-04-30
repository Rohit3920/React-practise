import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";


function HookUseMemo(){

    const [count, setCount] = useState(1);
    const [item, setItem] = useState(1);

    const multiCountMemo = useMemo(function multiCount(){
        console.log("MultiCount", count)
       return count + 2;
    })
    console.log(multiCountMemo)




    return (
        <div>
            <h1>useMemo Hook in React JS</h1>
            <h4>Count: {count}</h4>
            <h4>Item: {item}</h4>

            <Button onClick={()=> setCount(multiCountMemo)}>Count Inc</Button>
            <Button onClick={()=>setItem(item * 2)}>item Inc</Button>
        </div>
    )


}

export default HookUseMemo;