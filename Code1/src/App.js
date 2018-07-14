import React,{Component} from 'react';
import './App.css';
import {PageHeader} from './childs/header/Header';
export function test(){
  console.log("this is test...");
}
export default class App extends Component{
  constructor(){
    super();
    this.object ={};
    this.state = {yourname:'',txts:this.object,amountVal:0};
    this.myname = '';
    console.log("Const Call");
  }
  takeInput(event){
     this.myname = event.target.value;
     //console.log("What is this ",this);
    console.log("Inside Take Input ",this.myname);
    this.setState({...this.state,yourname:this.myname});
  }
  computeIt(){
    console.log("Price is ",this.refs.pr.value);
    console.log("Qt is ",this.refs.qt.value);
    var amount = parseInt(this.refs.pr.value) * parseInt(this.refs.qt.value);
    this.setState({...this.state,amountVal:amount});
  }
  render(){
    var name = 'Amit';
    console.log("Render Call");
    return(
      <div>
        <PageHeader/>
        <input type="text" ref="pr" placeholder="Type Price "/>
        <input type="text" ref="qt" placeholder="Type Quantity "/>
        <button onClick={this.computeIt.bind(this)}>Compute Amount</button>
        <br/>
        Amount is {this.state.amountVal}
        <hr/>
        <input type="text" onChange={this.takeInput.bind(this)} placeholder="Type Name Here"/>
      <h1 className="red">Name is  {this.state.yourname}</h1>
     
      </div>
    )
  }
}