import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            <Link to='/create'>Create Trip</Link>
            <Link to='/edit'>Edit Trip</Link>
        </div>
    )
} 


export default NavBar;
