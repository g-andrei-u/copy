import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../Componets/Common/headerSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ShowArticlesButton = () => {
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
        {articles.map(item => (
            <div key={item.title}>
                <button onClick={() => navigate(`/admin/update/${item._id}`)}>{item.title}</button>
            </div>
        ))}
        </>
    )
};


export default ShowArticlesButton;