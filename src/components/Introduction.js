import React from 'react';
import { Button } from 'react-bootstrap';
import foto from '../profielfoto2.png';

export default function Introduction(props) {
  return (
    <div className="Introduction">
      <h3>Hi, my name is</h3>
      <h1>Michiel Van Steen</h1>
      <p>
        I'm a frontend developer based in Buggenhout. <br/> 
        I like building interactive web applications in Javascript/React.
      </p>
      <Button variant="outline-primary" name="contact" onClick={props.scrollWindow} className='button' >Get in touch</Button>{' '}
    </div>
  );
}
