import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './Home.css'


class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        description:"Welcome to Photos from the Great Beyond!"
      }
      this.displayPod= this.displayPod.bind(this)
      this.displayMars=this.displayMars.bind(this)
      this.displayAmateur=this.displayAmateur.bind(this)

     }
     
     displayPod(evt){
       evt.preventDefault();
       this.setState({description: "Photo of the Day Gallery displays a collection of images from NASA's 'Photo of The Day' collection. Enjoy a dazzling display of breathtaking images of our earth and beyond", })
     }
     displayMars(evt){
      evt.preventDefault();
      this.setState({description: "Mars Rover Photo Gallery displays a collection of images taken from NASA's Mars Rovers. Enjoy a numnber of real photos of the fourth planet from the sun and see what the surface of another planet truly looks like"})
    }
    displayAmateur(evt){
      evt.preventDefault();
      this.setState({description: "Amateur Astronomer Gallery showcases photos taken by everyday people like yourself! These photos can be taken through anything from a phone camera to a high-powered telescope. Explore photos taken by amateur astronomers across the country, and maybe even contribute your own images to the gallery!"})
    }
     render(){
       return(
      <div className="main">
         <div className="FirstText">
         <h1 className="title">Photos from the Great Beyond</h1>
      </div>
      <div className="pod" onClick={this.displayPod}>
        <h1 className="podWords">Photo of the Day Gallery</h1>
      </div>
      <div className="mars" onClick={this.displayMars}>
        <h1 className="marsWords">Mars Rover Photo Gallery</h1>
      </div>
      <div className="amateur" onClick={this.displayAmateur}>
        <h1 className="amateurWords">Amateur Astronomer Gallery</h1>
      </div>
      <div className="text">
      <h1 className="textWords">{this.state.description}</h1>
      </div>
      <div className="p p-1"></div>
     <div className="p p-2"></div>
     <div className="p p-3"></div>
     <div className="p p-4"></div>
      </div>
       )
     }
    
  }
  
  export default Home;