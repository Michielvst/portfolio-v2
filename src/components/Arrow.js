import React from "react";

export default function Arrow(props) {
  return (
    <div
      className={`arrow ${props.extra}`}
      name={props.name}
      onClick={props.scrollWindow}
    >
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </div>
  );
}
