import React from 'react';
import { Link } from 'react-router-dom';
import { FaPatreon, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p>© All Rights Reserved</p>
                </div>
                <div>
                    <p className='email'>Into.Europe@outlook.com</p>
                    <Link>
                        <FaPatreon />
                    </Link>
                    <Link>
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </footer>
    )
};


export default Footer;