import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Home from '../home/Home'
import PhotoOfDay from '../photoOfDay/PhotoOfDay';
import Amateur from '../amateur/Amateur'
import Mars from '../mars/Mars'
import AmateurCreate from '../amateur-create/Amateur-Create'
import ShowPhoto from '../showPhoto/ShowPhoto'
import ShowAmateur from '../showAmateur/ShowAmateur'
import UpdateImage from '../updateImage/UpdateImage'



const NASAHeader = styled.header`
display:flex;
flex-direction:column;
background:linear-gradient(to right, rgba(0,0,0,1), rgba(136,136,136,0.25));
height:46px;
width:100%;
top:0;
position:fixed;
color:white;
@media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 810px) {
    font-size: 12px;
  }
  @media (max-width: 730px) {
    font-size: 10px;
  }
  @media (max-width: 650px) {
    font-size: 8px;
  }
  @media (max-width: 560px) {
    font-size: 6px;
  }
  @media (max-width: 470px) {
    font-size: 4px;
  }
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
          <Link to="/SubmitImage">
          <li>Submit an Image</li>
          </Link>
        </ul>  
      </NASAHeader>
      <main>
        <Route path ="/" exact render = {props => <Home  {...props}/>}/>
        <Route path ="/PhotoOfTheDay" exact render = {props => <PhotoOfDay  {...props}/>}/>
        <Route path ="/Mars" exact render = {props => <Mars  {...props}/>}/>
        <Route path ="/Amateur" exact render = {props => <Amateur  {...props}/>}/>
        <Route path ="/SubmitImage" exact render = {props => <AmateurCreate {...props}/>}/>
        <Route path ="/PhotoOfTheDay/:title" exact render = {props => <ShowPhoto {...props}/>}/>
        <Route path ="/Amateur/:title" exact render = {props => <ShowAmateur {...props}/>}/>
        <Route path ="/Amateur/:title/Edit" exact render = {props => <UpdateImage {...props}/>}/>
      </main>
      <NASAFooter/>
    </div>
     )
   }
  
}

export default App;
