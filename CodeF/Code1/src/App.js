import React, { Component } from 'react';
import {SearchBar} from './childs/searchbar/Searchbar';
import {SearchList} from './childs/list/SearchList';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.bindEvents();
    this.state = {mobiles:[]};
    this.searchValue = '';
    this.searchPlaceHolder = 'Type To Search...';
  }
  bindEvents(){
    this.takeInput  = this.takeInput.bind(this);
  }
  takeInput(event){
    this.searchValue = event.target.value;
  }
  doAjax(object){
    console.log("Object Rec in  AJax ",object);
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(response=>{
      response.json().then(data=>{
        console.log("Data is ",data);
        this.setState({mobiles:data.mobiles});
      }).catch(err=>{
        console.log("Invalid JSON ",err);
      })
    }).catch(err=>{
      console.log("Error in Ajax Call ",err);
    })
    console.log("Do Ajax call ",this.searchValue);
  }
  render() {
    return (
      <div >
        <h2>Shop Demo</h2>
        <SearchBar searchplaceholder={this.searchPlaceHolder}  takeChildInput={this.takeInput} parentfn={this.doAjax.bind(this)}/>
        <br/>
        <SearchList list={this.state.mobiles}/>
      </div>
    );
  }
}


