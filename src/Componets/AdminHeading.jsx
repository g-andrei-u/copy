import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import { RxExit } from 'react-icons/rx';
import { AuthContext } from '../Context/AuthProvider';


const AdminHeading = () => {
    const { setAuth } = useContext(AuthContext);

    const logout = () => {
        localStorage.setItem('auth', 'false');
        setAuth(false);
    }

    return (
        <div className="heading-admin">
            <div>
                <Link to='/admin' >Add Article<PiArrowRight /></Link>
                <Link to='/admin/update' >Edit Article<PiArrowRight /></Link>
                <Link to='/admin/delete' >Delete Article<PiArrowRight /></Link>
                <Link to='/admin/delete' onClick={logout} >Logout<RxExit /></Link>
            </div>
        </div>
    )
};


export default AdminHeading;