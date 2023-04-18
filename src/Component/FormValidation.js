import { useState } from "react";
import { Button } from "react-bootstrap";
// import 'style.css'


export default function FormValidation() {

    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);

    function formHandle(e) {
        e.preventDefault();
    }

    const userHandler = (e) => {
        var item = e.target.value;
        item.length <= 3 ? setUserErr(true) : setUserErr(false)
    }

    const PassHandler = (e)=> {
        var item = e.target.value;
        item.length <= 3 ? setpasswordErr(true) : setpasswordErr(false)
    }

    return (
        <div>
            <h1>Basic Form Validation</h1>

            <form className="form" onSubmit={formHandle}>
                <div className="inputDiv">
                    <b>User Name : </b>
                    <input type="text" onChange={userHandler} /><br />
                    {
                        userErr ? <span> ..User Not Valid.. </span> : <span></span>
                    }
                </div><br />

                <div className="inputDiv">
                    <b>Password : </b>
                    <input type="password" onChange={PassHandler} /><br />
                    {
                        passwordErr ? <span> ..Password Not Valid..  </span> : <span></span>
                    }
                </div><br />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )



}