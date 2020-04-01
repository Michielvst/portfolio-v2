import React from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import NavbarTop from "./components/NavbarTop";
import Skills from "./components/Skills";
import Applications from "./components/Applications";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";

class App extends React.Component {
  aboutRef = React.createRef();

  scrollWindow = e => {
    const element = document.getElementById(e.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="App">
        <NavbarTop scrollWindow={this.scrollWindow} />
        <div id="introduction">
          <Introduction scrollWindow={this.scrollWindow} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="applications">
          <Applications />
        </div>
        <div id="contact">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </div>
      </div>
    );
  }
}

export default App;
