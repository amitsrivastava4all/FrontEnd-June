import React, { Component } from 'react';
import {Header} from './Header';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import {Shoe} from './shoes';
import {News} from './news';

class App extends Component {
  render() {
    return (
      <div >
        <h1>React Nested Route Demo</h1>
        <Header></Header>
        <hr/>
        <fieldset><legend>View</legend>
        <Switch>
          <Route path="/" exact render = {()=><h1>Home Page</h1>}> </Route>
          <Route path="/shoes"  component={Shoe}/>
          <Route path="/news" exact component={News}/>
        </Switch>
        </fieldset>
      </div>
    );
  }
}

export default App;
