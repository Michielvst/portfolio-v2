import React from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import NavbarTop from "./components/NavbarTop";
import Skills from "./components/Skills";
import Applications from "./components/Applications";
import Contact from "./components/Contact";
import Arrow from "./components/Arrow";

class App extends React.Component {
  aboutRef = React.createRef();

  scrollWindow = e => {
    console.log(e.currentTarget.getAttribute("name"));
    const element = document.getElementById(
      e.currentTarget.getAttribute("name")
    );
    element.scrollIntoView({ behavior: "smooth" });
  };

  test = () => {
    console.log("testestetst");
  };

  render() {
    return (
      <div className="App">
        <NavbarTop scrollWindow={this.scrollWindow} />
        <div id="introduction" className="fullScreen">
          <Introduction scrollWindow={this.scrollWindow} />
          <Arrow
            name="about"
            scrollWindow={this.scrollWindow}
            test={this.test}
          />
        </div>
        <div id="about" className="fullScreen">
          <About scrollWindow={this.scrollWindow} />
          <Arrow
            name="skills"
            scrollWindow={this.scrollWindow}
            test={this.test}
          />
        </div>
        <div id="skills" className="fullScreen">
          <Skills scrollWindow={this.scrollWindow} />
          <Arrow
            name="applications"
            scrollWindow={this.scrollWindow}
            test={this.test}
          />
        </div>
        <div id="applications" className="fullScreen">
          <Applications scrollWindow={this.scrollWindow} />
          <Arrow
            name="contact"
            extra="appArrow"
            scrollWindow={this.scrollWindow}
            test={this.test}
          />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
