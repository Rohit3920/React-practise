import React, { useState} from "react";
import './Login.css';
import { Button } from "react-bootstrap";

export default function Login() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    function loginHandler(e) {
        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value
        item.length < 3 ? setUserErr(true) : setUserErr(false)
    }

    function passwordHandler(e) {
        let item = e.target.value
        item.length < 3 ? setPasswordErr(true) : setPasswordErr(false)
    }

    return (
        <div className="LoginDiv">
            <h1>LOGIN FORM</h1>

            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Enter User Name" onChange={userHandler} /><br/>
                {userErr ? <span>User Not Valid</span>: <span></span>}
                <br /><br />

                <input type="password" placeholder="Enter Password" onChange={passwordHandler} /><br/>
                {passwordErr ? <span>Password Not Valid</span> : <span></span>}
                <br /><br />

                <Button type="submit">LogIn</Button>
            </form>
        </div>
    );
}