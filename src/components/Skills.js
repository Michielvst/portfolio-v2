import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import Arrow from "./Arrow";

export default function Skills(props) {
  return (
    <div className="Skills">
      <FadeInSection>
        <Container>
          <Row>
            <h2>Skills</h2>
          </Row>
          <Row>
            <Col lg={6}>
              <p>
                I am proficient in writing Javascript/Typescript applications in
                React. <br />
                <br></br>I also have experience with Java, SQL and Structured
                Text for programming PLC's.
              </p>
            </Col>
            <Col lg={4}>
              <ul>
                <li>Javascript (ES6)</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML and CSS</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </FadeInSection>
    </div>
  );
}
