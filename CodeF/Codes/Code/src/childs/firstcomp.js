import React from 'react';  
import {centeralStore} from '../models/store';
export class FirstComp extends React.Component{
    constructor(){
       super(); 
    }
    compute(){
        var firstNumber = this.refs.firstno.value;
        var secondNumber = this.refs.secondno.value;
        const payLoad = {first:firstNumber,second:secondNumber};
        centeralStore.dispatch({type:'ADD',pay:payLoad});
    }
    render(){
        return(
            <div>
                <input type="text" ref="firstno" placeholder="Type First Number"/>
                <input type="text" ref="secondno" placeholder="Type Second Number"/>
                <button onClick={this.compute.bind(this)}>Add</button>
            </div>
        )
    }
}