import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Arrow from "./Arrow";

export default function Introduction(props) {
  const introRef = React.createRef();
  const nameRef = React.createRef();
  const textRef = React.createRef();
  const buttonRef = React.createRef();

  useEffect(async () => {
    const wait = (amount = 0) =>
      new Promise(resolve => setTimeout(resolve, amount));
    introRef.current.classList.add("is-visible");
    await wait(1000);
    nameRef.current.classList.add("is-visible");
    await wait(1000);
    textRef.current.classList.add("is-visible");
    await wait(1000);
    buttonRef.current.classList.add("is-visible");
  }, []);

  return (
    <div className="Introduction">
      <h3 ref={introRef} className="fade-in-section-top">
        Hi, my name is
      </h3>
      <h1 ref={nameRef} className="fade-in-section">
        Michiel Van Steen
      </h1>
      <p ref={textRef} className="fade-in-section">
        I'm a frontend developer based in Buggenhout. <br />I like building
        interactive web applications in Javascript/React.
      </p>
      <Button
        variant="outline-primary"
        name="contact"
        onClick={props.scrollWindow}
        className="button fade-in-section-bot"
        ref={buttonRef}
      >
        Get in touch
      </Button>{" "}
    </div>
  );
}
