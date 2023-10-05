import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { Outlet } from "react-router-dom";


const RequireAuth = () => {
    const { auth } = useContext(AuthContext);
    console.log(auth)

    /*const axiosPostAuth = () => {
        axios.post('http://localhost:4000/user', { username: username, password: password })
        .then((res) => {
            console.log('Succes on Authentication');
            dispatch(setAuthenticated(true));
        })
        .catch((error) => {
            console.log('Error on Authentication', error);
        })
    };


    useEffect(() => {
        if (username && password) {
            axiosPostAuth();
        }
    }, [username, password])*/


    if (auth) {
        return <Outlet />
    }

    return null;
};


export default RequireAuth;