import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const SearchBar = (props)=>{
    return(
        <div>
            <label>Search</label>
            <input type="text" onChange={props.takeChildInput}  placeholder={props.searchplaceholder}/>
            <button className="btn btn-primary" onClick={props.parentfn}>Search</button>

        </div>
    ) 
}