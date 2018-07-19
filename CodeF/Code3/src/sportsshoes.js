import React from 'react';
const SportShoes=(props)=>{
    
    return(
        <h1>Sport Shoes {props.match.params.price}</h1>
    )
}
export default SportShoes;