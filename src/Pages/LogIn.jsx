import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    console.log(auth)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && password) {
            axiosPostAuth();
        }
    }

    const axiosPostAuth = () => {
        axios.post('http://localhost:4000/user', {username: name, password: password})
        .then((res) => {
            console.log('Succes on Authentication');
            localStorage.setItem('auth', 'true');
            navigate('/admin', /*{ replace: true }*/);
            setAuth(true);
        })
        .catch((error) => {
            console.log('Error on Authentication', error);
        })
    };


    return (
        <div className="form">
            <form>
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <br />
                <div>
                    <label>Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <br /><br /><br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <br /><br /><br />
            </form>
        </div>
    )
};


export default LogIn;