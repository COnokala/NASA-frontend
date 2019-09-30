import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"

class Home extends Component {
    constructor(props){
      super(props)
     }
     render(){
       return(
      <div className="App">
         <div className="FirstText">
         <h1 className="title">Photos from the Great Beyond</h1>
      </div>
      <div className="pod">
        <h1 className="podWords">Photo of the Day</h1>
      </div>
      <div className="mars">
        <h1 className="marsWords">Mars Rover Photos</h1>
      </div>
      </div>
       )
     }
    
  }
  
  export default Home;