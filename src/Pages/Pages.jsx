import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Componets/Common/Header';
import Footer from '../Componets/Common/Footer';
import Home from './Home';
import Contact from './Contact';
import Admin from './Admin/AddAdmin';
import { useSelector } from 'react-redux';
import ArticlePage from './ArticlePage';
import About from './About';
import ScrollToTop from '../Componets/scrollToTop.js';
import LogIn from './LogIn';
import ShowArticlesAdmin from './Admin/ShowArticlesAdmin';
import UpdateArticleAdmin from './Admin/UpdateArticleAdmin';
import ShowDeletedAdmin from './Admin/ShowDeletedAdmin';
import DeleteArticlesAdmin from './Admin/DeleteArticlesAdmin';
import AllArticles from './AllArticles';
import RequireAuth from '../Utilities/RequireAuth';



const Pages = () => {
    const articles = useSelector((state) => state.header.articles);


    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/all' element={<AllArticles />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/login' element={<LogIn />}/>
            
                {/*<Route element={<RequireAuth />}>*/}
                <Route element={<RequireAuth />}>
                <Route path='/admin' element={<Admin />}/>
                <Route path='/admin/update' element={<ShowArticlesAdmin />}/>
                <Route path='/admin/delete' element={<ShowDeletedAdmin />}/>
                {articles.map((item) => (
                <Route key={item.title} path={`/article/${item.title}`} element={
                    <ArticlePage 
                        title={item.title} 
                        date={item.date} 
                        content={item.content} 
                        imgPath={item.imgPath}
                    />
                }/>
                ))}
                {articles.map((item) => (
                <Route key={item.title} path={`/admin/update/${item._id}`} element={
                    <UpdateArticleAdmin 
                        title={item.title} 
                        date={item.date} 
                        content={item.content} 
                        _id={item._id}
                    />
                }/>
                ))}
                {articles.map((item) => (
                <Route key={item.title} path={`/admin/delete/${item._id}`} element={
                    <DeleteArticlesAdmin 
                        title={item.title}
                        _id={item._id}
                    />
                }/>
                ))}
                {/*</Route>*/}
                </Route>
            </Routes>
            <Footer />
        </Router>
    )
}; 


export default Pages;