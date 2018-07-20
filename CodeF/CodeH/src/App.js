import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div >
        <h1>Hello React</h1>
        <h2>Sum is {this.props.a * this.props.b}</h2>
      </div>
    );
  }
}

export default App;
