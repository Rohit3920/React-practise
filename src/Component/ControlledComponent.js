import { useState } from "react";


function ControlledComponent(){

    const [val, setVal] = useState(" ");

    return(
        <div>
            <h1>Controlled Component in React</h1>
            <h3>value : {val}</h3>

            <input type="text" onChange={(e)=>{
                setVal(e.target.value)
            }}/>
        </div>
    )

}

export default ControlledComponent;