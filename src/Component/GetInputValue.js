import { Form } from "react-bootstrap";
import react, {useState} from 'react'

function GetInputValue(){
    const [data, setData] = useState(null);

   const getData = (val) => {
        console.log(val.target.value)

        setData(val.target.value)

    }

    return (
        <div>
            <h1>Get Input Box Value: {data}</h1>
            <input type="text" onChange={getData}/>
            
        </div>
    );
}

export default GetInputValue;