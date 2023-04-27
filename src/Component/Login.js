import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // handle login logic here
    };

    const loginPg = () => {
        username === "rohit" && password === '123' ?
            alert("login successfully")
            : alert("Login Failed")

        username === "rohit" && password === '123' ?
            setUsername('')

            : setUsername(username)


        username === "rohit" && password === '123' ?
            setPassword('')
            : setPassword(password)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit" onClick={loginPg}>Login</button>
        </form>
    );
};

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // handle sign up logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">signup</button>
        </form>
    );
};

const App = () => {
    return (
        <div>
            <Login />
            <SignUp />
        </div>
    );
};

export default App;
