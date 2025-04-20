import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Amine Ben Khalifa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
<ul className="footer-icons">
  <li className="social-icons">
    <a
      href="https://github.com/amine-ben-k"
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/amine-ben-khalifa-685949275/"
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.instagram.com/amine__bk_"
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillInstagram />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="mailto:amine.bky@yahoo.com"
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MdEmail />
    </a>
  </li>
</ul>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
