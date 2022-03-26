import React, { useState } from 'react'
import axios from 'axios';

function Login() {

    // const [userName, setUsername] = useState('');
    // const [userPassword, setPassword] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // axios
    const login = () => {
        const data = { userName: username, userPassword: password }
        axios.post('http://49.0.198.122:3000/noyvilaijid/api/users/login', data ).then((resp) => {
            if(resp.status === 400){
                alert("invalid password");
            }
        })
    }

    //fetch data
    // async function login() {
    //     // console.warn('name'+username,'pass'+password);
    //     let item = { userName, userPassword };
    //     let result = await fetch("http://49.0.198.122:3000/noyvilaijid/api/users/login", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "accept" : "application/json"
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem("user-info", JSON.stringify(result));
    // }


    return (
        <div>
            <h1>Login</h1>
            <div className="login">
                <label htmlFor="">username</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} />

                <label htmlFor="">password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />

                <button onClick={login}>login</button>{' '}


                {/* <h4>Status : {loginStatus}</h4> */}
            </div>
        </div>
    );
}
export default Login;