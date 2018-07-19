import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './App.css';
const Header= (props)=>{
    var priceValue = 19000;
    return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                        <li><Link to={{pathname:'/shoes',hash:'#casual',search:'?price=9000&brand=Puma'}}>Shoes</Link></li>
                        <li><NavLink to="/aboutus/Amit/Trainer">AboutUs</NavLink></li>
                        <li><Link to="/news">News</Link></li>
                        
                        
                    </ul>
                </nav>
            </div>
    );
}
export default Header;