import 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'typeface-amatic-sc';
import 'typeface-roboto-condensed';
import React, { Component } from 'react';
import logo from './images/logo.png';
import './SplashScreen.css';

class App extends Component {
 
  render() {
    return (
      <SplashScreen handleClick={this.handleClick} logo={logo} welcomeText="Coming Soon" />
    );
  }
}

function SplashScreen(props) {
  return (
    <div className="splash-screen">
      <header className="App-header">
      </header>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  
  );
}

export default App;
