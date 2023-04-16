import { useState } from "react";
import { Button } from "react-bootstrap";

export default function BasicForm(){

    const [name, setName] = useState(" ");
    const [country, setCountry] = useState(" ");
    const [tnc, setTnc] = useState(false);

    function formHandle(e){
        e.preventDefault();
    }


    return(
        <>
            <h1>Basic Form</h1>
            <form className="form" onSubmit={formHandle}>
                
                <p>Name: <b>{name}  :: </b> Country: <b>{country}  :: </b> TNC: <b>{tnc}</b></p><br/>

            <b>Name: </b> <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" /><br/><br/>

            <b>Country: </b> <select onChange={(e) => setCountry(e.target.value)}>
                <option>Choose Country</option>
                <option>INDIA</option>
                <option>CHiNA</option>
                <option>America</option>
            </select><br/><br/>

            <input type="checkbox" onChange={(e) => setTnc(e.target.value)}/><span> Accept Term and Condition </span><br/><br/>

            <Button type="submit">Submit</Button>

            </form>
        </>
    )
}