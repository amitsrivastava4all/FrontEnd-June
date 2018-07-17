import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const SearchBar = (props)=>{
    var object = {x:100, y:200};
    return(
        <div>
            <label>Search</label>
            <input type="text" onChange={props.takeChildInput}  placeholder={props.searchplaceholder}/>
            <button className="btn btn-primary" onClick={()=>{
                console.log("Inside Button Click ");
                props.parentfn(object);
                }
                }>Search</button>

        </div>
    ) 
}