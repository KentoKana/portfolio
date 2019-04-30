import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CoreSkills from "./CoreSkills";
import Projects from "./Projects";
import Container from 'react-bootstrap/Container';

function TitleSection() {
  return (
    <main>
      <Container>
        <h1>I'm Kento.</h1>
        <p>A full-stack web developer currently based in Toronto. I have a thing for a great cup of coffee, web development, and learning. </p>
      </Container>
    </main>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="text-center">
        <TitleSection />
        <Projects />
        <CoreSkills />


      </div>
    );
  }
}

export default App;
