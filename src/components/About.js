import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import foto from "../profielfoto2.png";
import FadeInSection from "./FadeInSection";
import Arrow from "./Arrow";

export default function Introduction(props) {
  return (
    <div className="About">
      <Container>
        <FadeInSection>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <h2>About</h2>
              <p>
                I am a 25 year old frontend developer from Buggenhout, Belgium
                with a focus on building web applications with React. <br />
                <br />
                My hobbies are playing games, making music and I am involved
                with the regional youth movement.
              </p>
            </Col>
            <Col lg={4}>
              <Image src={foto} roundedCircle className="foto" />
            </Col>
          </Row>
        </FadeInSection>
      </Container>
    </div>
  );
}
