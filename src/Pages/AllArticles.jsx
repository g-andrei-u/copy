import React, { useEffect } from "react";
import Article from "../Componets/Article";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Componets/Common/headerSlice";


const AllArticles = () => {
    const articles = useSelector((state) => state.header.articles);
    const dispatch = useDispatch();

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
        <main>
            <div className="inner-main">
                <h1 style={{textAlign: 'center'}}>Discover Europe</h1>
                <div className="articles">
                    {[...articles].sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().map(item => (
                        <Link to={`/article/${item.title}`} key={item.title} className="article">
                            <Article 
                            title={item.title} 
                            date={item.date} 
                            content={item.content} 
                            imgPath={item.imgPath} 
                            />
                        </Link>
                    ))}
                    <br />
                </div>
            </div>
        </main>
    )
}

export default AllArticles;