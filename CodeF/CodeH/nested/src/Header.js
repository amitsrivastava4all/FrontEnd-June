import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shoes">Shoes</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
            </ul>
        </nav>
    )
}