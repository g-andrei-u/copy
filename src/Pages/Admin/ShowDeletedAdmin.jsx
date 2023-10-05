import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../../Componets/Common/headerSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminHeading from '../../Componets/AdminHeading';

const ShowDeletedAdmin = () => {
    const articles = useSelector((state) => state.header.articles);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axiosFetchData();
    }, [])

    const axiosFetchData = async() => {
        await axios.get(`http://localhost:4000/articles`)
        .then(res => {
            dispatch(add(res.data))
        })
        .catch(err => console.error(err))
    }

    return (
        <>
        <AdminHeading />
        <div className="admin-form">
            <form>
                <h1>Delete Articles:</h1>
            {articles.map(item => (
                <div key={item.title}>
                <button onClick={() => navigate(`/admin/delete/${item._id}`)}>{item.title}</button>
                </div>
            ))}
            </form>
        </div>
        </>
    )
};


export default ShowDeletedAdmin;