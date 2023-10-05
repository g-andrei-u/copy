import React, { useEffect, useState } from "react";
import Article from "../Componets/Article";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Componets/Common/headerSlice";


const Home = () => {
    const articles = useSelector((state) => state.header.articles);
    const dispatch = useDispatch();
    const [shownArticles, setShownArticles] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        if (articles.length > 6) {
            setShownArticles(articles.slice(0, 6));
            setShowMore(true);
        } else if (articles) {
            setShownArticles(articles);
            setShowMore(false);
        }
        axiosFetchData();
    }, [articles])


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
                    {[...shownArticles].sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().map(item => (
                        <Link to={`/article/${item.title}`} key={item.title} className="article">
                            <Article 
                            title={item.title} 
                            date={item.date} 
                            content={item.content} 
                            imgPath={item.imgPath} 
                            />
                        </Link>
                    ))}
                    <br /><br />
                    {showMore && <Link to='/all' className="button">View All</Link>}
                </div>
            </div>
        </main>
    )
}

export default Home;