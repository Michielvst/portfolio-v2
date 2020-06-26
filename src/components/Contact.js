import React from "react";
import githubimg from "../githubimg.png";
import { Button } from "react-bootstrap";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <div className="Contact">
      <FadeInSection>
        <h2>Contact</h2>
        <p>
          I am currently looking for a Frontend opportunity. Feel free to
          contact me!
        </p>
        <ul>
          <li>Schoolstraat 3 9255 Buggenhout</li>
          <li>+32 476 01 07 10</li>
          <li>michiel--vs@outlook.com</li>
        </ul>
        <div className="imgLinkGit">
          <a
            href="https://www.linkedin.com/in/michiel-van-steen-0ba633185/"
            target="_blank"
          >
            <img
              src="https://www.siggis.be/wp-content/uploads/2018/01/Linkedin-logo-1-550x550-300x300.png"
              alt="linkedin"
              className="linkimg"
            ></img>
          </a>
          <a href="https://github.com/Michielvst" target="_blank">
            <img src={githubimg} alt="github" className="linkimg"></img>
          </a>
          <a href="https://docdro.id/gZwD9z4" target="_blank">
            <Button
              variant="outline-primary"
              name="contact"
              className="button resumeButton"
            >
              Resume
            </Button>{" "}
          </a>
        </div>
      </FadeInSection>
    </div>
  );
}
