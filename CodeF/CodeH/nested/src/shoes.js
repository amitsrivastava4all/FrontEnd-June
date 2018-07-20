import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import './Header.css';
import {Casual} from './casual';
import {Formal} from './formal';
export const Shoe = (props)=>{
    return (
        <div>
            <h2>Shoe Component</h2>
            <nav>
                <ul>
                    <li><NavLink to="/shoes/casual">Casual</NavLink></li>
                    <li><NavLink to="/shoes/formal">Formal</NavLink></li>
                </ul>
                <fieldset>
                    <legend>Shoe Views...</legend>
                    <Route path="/shoes/casual" exact component={Casual}></Route>
                    <Route path="/shoes/formal" exact component={Formal}></Route>
                </fieldset>
            </nav>
        </div>
    )
}