import { useState } from "react";
import { Button } from "react-bootstrap";

function CondRendering(){
    const [logged, setLogged] = useState(false);


    return(
        <div>
            <h1>Conditional Rendering in React</h1>

        {
            logged ? <h3>True st'ment in Rendring</h3>: <h4>False st'ment in Rendring</h4>
        }

            <Button onClick={()=> {
                setLogged(!logged)
            }}>Rendering Work</Button>
        </div>
    )
}
export default CondRendering;