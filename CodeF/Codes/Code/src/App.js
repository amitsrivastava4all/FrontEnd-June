import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComp} from './childs/firstcomp';
import SecondComp from './childs/secondcomp';

class App extends Component {
  render() {
    return (
      <div >
        <h2>React Redux Example</h2>
        <FirstComp></FirstComp>
        <hr/>
        <SecondComp></SecondComp>
      </div>
    );
  }
}

export default App;
