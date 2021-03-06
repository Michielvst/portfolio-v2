import React from "react";
import catchofthe from "../catchoftheday.png";
import currency from "../currency-convertor.png";
import hearthstone from "../hearthstone-card-app.png";
import memory from "../memory-img.png";
import chomp from "../chomp.png";
import kleurenwiezen from "../kleurenwiezenapp.png";
import { Container, Row, Col } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import Arrow from "./Arrow";

export default function Applications(props) {
  return (
    <>
      <div className="Applications">
        <FadeInSection>
          <h2>Applications</h2>
          <Container>
            <Row>
              <Col lg>
                <div className="apps">
                  <p>Chomp Game</p>
                  <a href="https://chompgame.netlify.com/" target="#blank">
                    <img src={chomp} alt="chomp" className="appImage"></img>
                  </a>
                </div>
              </Col>

              <Col lg>
                <div className="apps">
                  <p>Kleurenwiezen Scorecalculator</p>
                  <a
                    href="https://kleurenwiezencalc.netlify.com/"
                    target="#blank"
                  >
                    <img
                      src={kleurenwiezen}
                      alt="kleurenwiezen"
                      className="appImage"
                    ></img>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg>
                <div className="apps">
                  <p>Menu for a seafood market</p>
                  <a
                    href="https://michielvs-catch-of-the-day.netlify.com"
                    target="#blank"
                  >
                    <img
                      src={catchofthe}
                      alt="Catch of the Day afbeelding"
                      className="appImage"
                    ></img>
                  </a>
                </div>
              </Col>

              <Col lg>
                <div className="apps">
                  <p>Memory Game</p>
                  <a href="https://memory-app.netlify.com" target="#blank">
                    <img src={memory} alt="memory" className="appImage"></img>
                  </a>
                </div>
              </Col>

              <Col lg>
                <div className="apps">
                  <p>Simple Currency Convertor</p>
                  <a
                    href="https://michielvs-currency-converter.netlify.com"
                    target="#blank"
                  >
                    <img
                      src={currency}
                      alt="Currency Convertor afbeelding"
                      className="appImage"
                    ></img>
                  </a>
                </div>
              </Col>

              <Col lg>
                <div className="apps">
                  <p>Hearthstone Card Sorter</p>
                  <a
                    href="https://michielvs-hearthstone-card-app.netlify.com"
                    target="#blank"
                  >
                    <img
                      src={hearthstone}
                      alt="Hearthstone afbeelding"
                      className="appImage"
                    ></img>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </FadeInSection>
      </div>
    </>
  );
}
