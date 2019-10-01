import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import { render } from "react-dom";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import styles from "./IndexStyles";
import SimpleModalLauncher from "./SimpleModalLauncher";
import Image from "./images/bg.jpg";

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
      <SimpleModalLauncher div className="pod" buttonLabel="Photo of the Day">
        <h1 className="podWords"></h1>
        <img src={require('./images/bg.jpg')} />
        </SimpleModalLauncher>

        <SimpleModalLauncher div className="mars" buttonLabel="Mars Rover Photos">
        <h1 className="marsWords">Mars Rover Photos</h1>
        
      </SimpleModalLauncher>
     </div>
       )
      }
    }

    Home.propTypes = {
      sheet: PropTypes.object,
      classes: PropTypes.object
    };
  
const StyledApp = injectSheet(styles)(Home);

render(<StyledApp />, document.getElementById("root"));

  export default Home;