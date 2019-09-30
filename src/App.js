import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Home from './Home'
import PhotoOfDay from './PhotoOfDay';
import Amateur from './Amateur'
import Mars from './Mars'


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
        <Link to ="/">
        <li>Home</li>
        </Link>
        <Link to="/PhotoOfTheDay">
        <li>Photo of the Day Gallery</li>
        </Link>
        <Link to="/Mars">
        <li>Mars Rover Photo Gallery</li>
        </Link>
        <Link to="/Amateur">
        <li>Amateur Astronomer Gallery</li>
        </Link>
      </ul>  
       </NASAHeader>
      <NASAFooter />
      <Route path ="/" exact render = {props => <Home  {...props}/>}/>
      <Route path ="/PhotoOfTheDay" exact render = {props => <PhotoOfDay  {...props}/>}/>
      <Route path ="/Mars" exact render = {props => <Mars  {...props}/>}/>
      <Route path ="/Amateur" exact render = {props => <Amateur  {...props}/>}/>



      
    </div>
     )
   }
  
}

export default App;
