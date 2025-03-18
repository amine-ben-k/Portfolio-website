import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row md={8} className="home-about-description">
          {/* <Col md={8} className="home-about-description"> */}
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a passionate software engineer currently based in Qatar, with a Bachelor's degree in Software Engineering from Bahcesehir University. Driven by curiosity and a love for innovation, I am a quick learner who thrives on exploring new technologies and tackling challenging projects.
            Collaboration is at the heart of my work ethic—I enjoy working in dynamic team environments where creativity and problem-solving come together to create impactful solutions. Fluent in Arabic, English, and French, I bring strong communication skills to the table, enabling me to connect and collaborate effectively in multicultural settings.
            With a diverse portfolio of projects ranging from full-stack web applications to AI-powered systems, I am always looking to push boundaries and grow as a developer. When I’m not coding, you’ll find me exploring new tools, brainstorming ideas, or diving into the latest tech trends.
              <br />
              <br />
             
     
            </p>
          {/* </Col> */}
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amine-ben-k"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amine-ben-khalifa-685949275/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amine__bk_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
