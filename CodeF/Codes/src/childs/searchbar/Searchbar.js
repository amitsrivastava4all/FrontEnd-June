import React from 'react';
export const SearchBar = (props)=>{
    return(
        <div>
            <label>Search</label>
            <input type="text" onChange={props.takeChildInput}  placeholder="Type to Search"/>
            <button onClick={props.parentfn}>Search</button>

        </div>
    ) 
}