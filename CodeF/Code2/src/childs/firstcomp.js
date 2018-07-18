import React from 'react';  
import {centeralStore} from '../models/store';
import {actionCreator} from '../models/action';
import {asyncAction} from '../models/asyncAction';
import {actionNames} from '../models/actionnames';
export class FirstComp extends React.Component{
    constructor(){
       super(); 
    }
    compute(){
        var firstNumber = this.refs.firstno.value;
        var secondNumber = this.refs.secondno.value;
        const payLoad = {first:firstNumber,second:secondNumber};
        centeralStore.dispatch({type:actionNames.ADD,pay:payLoad});
    }
    multiply(){
        var firstNumber = this.refs.firstno.value;
        var secondNumber = this.refs.secondno.value;
        var actionObject = actionCreator('MUL',firstNumber,secondNumber);
        centeralStore.dispatch(actionObject);
    }
    asyncCall(){
        console.log("Inside asyncCall ");
       
  
        centeralStore.dispatch(asyncAction('ASYNC',100,200));
    }
    render(){
        return(
            <div>
                <input type="text" ref="firstno" placeholder="Type First Number"/>
                <input type="text" ref="secondno" placeholder="Type Second Number"/>
                <button onClick={this.compute.bind(this)}>Add</button>
                <button onClick={this.multiply.bind(this)}>Multiply</button>
                <button onClick={this.asyncCall.bind(this)}>Async Operations</button>
            </div>
        )
    }
}