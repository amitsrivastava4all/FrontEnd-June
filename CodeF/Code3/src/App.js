import React from 'react';
import {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch,Redirect} from 'react-router-dom';
import Header from './Header';
import AboutUs from './AboutUs';
import Shoes from './shoes';
import News from './News';
import SportShoes from './sportsshoes';
export default class App extends Component{
  constructor(){
    super();
  }
  
  render(){
    const shoe = <Route path="/shoes" exact component={Shoes}/>;
    const shoe2 = <Route path='/shoes' exact render = {()=><h1>Shoe Component</h1>}/>;
    var shoeRoute = 10>2?shoe:shoe2;
    
    return (
      <div>
       
        <Header/>
        <Switch>
        <Route path="/" exact render={()=><h1>Home Page</h1>}/>
        <Route path="/aboutus/:name/:descr" exact component={AboutUs}/>
       {/* {shoeRoute} */}
        <Route path="/news" exact component={News}/>

        <Redirect exact from="/new" to="/news"/>
        <Route path="/shoes" exact component={Shoes}/>
        { <Switch>
          <Route path="/shoes/casual" exact render={()=><h1>Casual Shoes</h1>}/>
          <Route path="/shoes/sports/:price" exact component={SportShoes}/>
        </Switch> }
        
        <Route render={()=><h1>NO PAGE EXIST </h1>}/>
        
        </Switch>
        
        </div>
    )
  }

}