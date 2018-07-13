import React, { Component } from 'react';
import {SearchBar} from './childs/searchbar/Searchbar';
import {SearchList} from './childs/list/SearchList';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.searchValue = '';
  }
  takeInput(event){
    this.searchValue = event.target.value;
  }
  doAjax(){
    console.log("Do Ajax call ",this.searchValue);
  }
  render() {
    return (
      <div >
        <h2>Shop Demo</h2>
        <SearchBar takeChildInput={this.takeInput.bind(this)} parentfn={this.doAjax.bind(this)}/>
        <br/>
        <SearchList/>
      </div>
    );
  }
}


