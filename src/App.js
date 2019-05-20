import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CoreSkills from "./CoreSkills";
import Projects from "./Projects";
import TitleSection from "./TitleSection";
import Navigation from "./Navigation"
import Contact from "./Contact";
import { configureAnchors } from 'react-scrollable-anchor'
 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({keepLastAnchorHash: false})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroidsOn: true,
    }
  }

  handleAsteroids = () => {
    this.setState({
      asteroidsOn: !this.state.asteroidsOn,
    });

  }

  render() {
    console.log(this.state.asteroidOn);
    return (
      <div className="text-center">
        {/* <div
          className="asteroidsButton"
          onClick={this.handleAsteroids}
          style={
            this.state.asteroidsOn ?
              {
                backgroundColor: '#1b75bb',
                color: 'rgb(146, 219, 146)'
              } :
              {
                backgroundColor: '#f05a28',
                color: 'rgb(71, 144, 255)',
              }
          }
          title={this.state.asteroidsOn ? "Turn Asteroids Off" : "Turn Asteroids On"}
        >
          <span
            title={this.state.asteroidsOn ? "Turn Asteroids Off" : "Turn Asteroids On"}
          >
            {this.state.asteroidsOn ? "Turn Asteroids Off" : "Turn Asteroids On"}
          </span>
          <span class="sr-only">
            {this.state.asteroidsOn ? "Turn Asteroids Off" : "Turn Asteroids On"}
          </span>

        </div> */}
        <Navigation />
        <TitleSection />
        <Projects />
        <CoreSkills />
        <Contact />
        {/* {this.state.asteroidsOn ?
          <Asteroid /> : <></>
        } */}

      </div>
    );
  }
}

export default App;
