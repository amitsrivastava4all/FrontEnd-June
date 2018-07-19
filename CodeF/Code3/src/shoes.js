import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const Shoes = (props)=>{
    console.log("shoes ",props);
    const query = new URLSearchParams(props.location.search);
    let value ="";
    for (let param of query.entries()) {
       value +=param;
    }
    return (<div><h1>Shoes  {value} </h1>
    <Link to="/new">Casual Shoes</Link>&nbsp;&nbsp;
    <NavLink to="/shoes/sports/12000">Sport Shoes</NavLink>
     </div>);
}
export default Shoes;