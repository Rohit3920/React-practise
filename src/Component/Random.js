import { useState } from "react";
import { Button } from "react-bootstrap";

function Random(){

    const [value, setValue]= useState(1);

    function Changevalue(){
        let v = Math.floor(Math.random()*7)

        v === 0 ? setValue(6) : setValue(v)


    }

    console.warn(Math.floor(Math.random()*6));

    return (
        <div>
            <h1>Random Value is : {value}</h1>
            <Button onClick={Changevalue}>Random Value</Button>
        </div>
    )
}
export default Random;