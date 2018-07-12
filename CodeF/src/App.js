import React,{Component} from 'react';
import './App.css';
import {PageHeader} from './childs/header/Header';
export function test(){
  console.log("this is test...");
}
export default class App extends Component{
  constructor(){
    super();
    console.log("Const Call");
  }
  render(){
    console.log("Render Call");
    return(
      <div>
        <PageHeader/>
      <h1 className="red">Hello React I am App Component</h1>
      <h1>Hello React I am App Component Again</h1>
      </div>
    )
  }
}