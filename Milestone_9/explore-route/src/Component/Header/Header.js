import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/friends'>Frineds</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    );
};

export default Header;