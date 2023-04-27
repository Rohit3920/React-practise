import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function HookUseEffect(){

    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            console.log(" Use Effect CALLED count", count)
        }, count*1000);
    }, [count])

    useEffect(() => {
        setTimeout(() => {
            console.log(" Use Effect CALLED data", data)
        }, data*1000);
    }, [data])

    return(
        <div>
            <h1>React Hook : UseEffect </h1>
            <h2> count : {count} <br /> Data: {data} </h2>
            <p> useEffect are React HOOK and setTimeOut function called</p>

        <Button onClick={()=> { setCount(count+1)}}>Incre-Counter</Button><br/><br/>
        <Button onClick={()=> { setData(data+1)}}>Incre-Data</Button>


        </div>
    )

}

export default HookUseEffect;