import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/CommonStyle.css';
import Logo from '../../Images/Logo.jpg';
import { MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";
import { filter } from './headerSlice';


const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const header = useRef(null);
    const articles = useSelector((state) => state.header.articles);
    const dispatch = useDispatch();
    let timeout;
    let lastScroll = window.scrollY;
    let fixedApplied = false;


    useEffect(() => {
        window.onscroll = () => {
            if (timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => {
                const currentScroll = window.scrollY;

                if (currentScroll > 10) {     
                    if (currentScroll > lastScroll && !fixedApplied) {
                        header.current.classList.add('fixed');
                        fixedApplied = true;
                    }
                } else if (fixedApplied) {
                    header.current.classList.remove('fixed');
                    fixedApplied = false;
                }

                lastScroll = currentScroll;
            }, 10)
        };
    }, [])


    const onSearch = () => {
        const lowerCaseSearchValue = searchValue.toLowerCase();
        const matchingArticle = articles.filter(item => item.title.toLowerCase().includes(lowerCaseSearchValue));

        if (matchingArticle.length > 0) {
            dispatch(filter(lowerCaseSearchValue))
        }
    }

    return (
        <header ref={header}>
            <div className='inner-header'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>
                </div>
                <nav>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact the Team</Link>
                </nav>
                <div className='search'>
                    <input type='text' placeholder='Search...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button onClick={onSearch}>
                        <MdSearch />
                    </button>
                </div>
            </div>
        </header>
    )
};


export default Header;