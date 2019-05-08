import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CoreSkills from "./CoreSkills";
import Projects from "./Projects";
import TitleSection from "./TitleSection";
import Navigation from "./Navigation"
import Contact from "./Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="text-center">
        <Navigation />
        <div className="diagonalDivBg"></div>
        <TitleSection />
        <Projects />
        <CoreSkills />
        <Contact />
      </div>
    );
  }
}

export default App;
