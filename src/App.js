import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';

const NASAHeader = styled.header`
background:linear-gradient(to right, rgba(0,0,0,1), rgba(136,136,136,0.25));
height:46px;
width:100%;
top:0;
position:fixed;
color:white;
`
const NASAFooter = styled.footer`
background-color:rgba(0, 0, 0, 0.55);
height:46px;
width:100%;
bottom:0;
position:fixed;
color:white;
`

class App extends Component {
  constructor(props){
    super(props)
   }
   render(){
     return(
    <div className="App">
       <NASAHeader >
       <ul>
        <li>Home</li>
        <li>Photo of the Day Gallery</li>
        <li>Mars Rover Photo Gallery</li>
        <li>Amateur Astronomer Gallery</li>
      </ul>  
       </NASAHeader>
       <div className="FirstText">
         <h1 className="title">Photos from the Great Beyond</h1>
      </div>
      <div className="pod">
        <h1 className="podWords">Photo of the Day</h1>
      </div>
      <div className="mars">
        <h1 className="marsWords">Mars Rover Photos</h1>
      </div>
      <NASAFooter />
    </div>
     )
   }
  
}

export default App;
