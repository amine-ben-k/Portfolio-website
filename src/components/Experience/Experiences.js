import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
import ooredooCert from "../../Assets/ooreedoo.png";
import mrBitsCert from "../../Assets/internship evaluation.png";
// import freelancerCert from "../../Assets/Certificates/freelancer.png";
// import qmicCert from "../../Assets/Certificates/qmic.png";
// import mrBitsCert from "../../Assets/Certificates/mrBits.png";

function Experiences() {
  return (
    <Container fluid className="project-section"> {/* Keeping same styles as projects */}
      <Particle />
      <Container>
        <h1 className="project-heading"> {/* Keeping same heading style */}
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the professional experiences I've had.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Freelancer Experience */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Freelancer - Full Stack Developer"
              startDate="2023"
              endDate="Present"
              description="Designed and built custom web applications for various clients, including e-commerce platforms, clinic management system, and farm management sustem."
            //   certificate={}
            />
          </Col>

          {/* QMIC Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Software Developer Intern - QMIC"
              startDate="Nov 2024"
              endDate="Feb 2025"
              description="Worked on LLM projects and developed full-stack applications, integrating AI-driven solutions using React.js, Node.js, and PostgreSQL."
            //   certificate={qmicCert}
            />
          </Col>

          {/* Ooredoo Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Backend Developer - Ooredoo"
              startDate="July 2024"
              endDate="Sep 2024"
              description="Developed backend solutions using Go, Node.js, Docker, and Kubernetes, creating APIs to streamline systems and improve efficiency."
              certificate={ooredooCert}
            />
          </Col>

          {/* Mr Bits Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Full Stack Developer Intern - Mr Bits (Remote)"
              startDate="July 2024"
              endDate="August 2024"
              description="Developed full-stack websites using React.js and JavaScript for responsive frontends and Node.js with PostgreSQL for scalable backends."
              certificate={mrBitsCert}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
