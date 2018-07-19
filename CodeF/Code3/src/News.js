import React from 'react';
export default class News extends React.Component{
    render(){
        return(<button onClick={this.goToHome.bind(this)}>Go to Home</button>);
    }
    goToHome(){
       // console.log(this.props);
        this.props.history.push("/");
      }
}