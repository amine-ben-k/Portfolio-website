import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
import ooredooCert from "../../Assets/ooreedoo.png";
import mrBitsCert from "../../Assets/internship evaluation.png";
// import qmicCert from "../../Assets/qmic.png";
// import scramblebitCert from "../../Assets/scramblebit.png";

function Experiences() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the professional experiences I've had.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* QMIC Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Software Developer Intern - QMIC"
              startDate="Oct 2024"
              endDate="Feb 2025"
              description={`• Developed an AI-powered clinical system integrating Large Language Models (LLMs), reducing manual data entry time by 40% through voice recognition for automated medical documentation.
              
              • Built an AI-driven diagnostics tool that analyzes patient history and symptoms, providing preliminary evaluations and improving diagnostic accuracy by 30%.
              
              • Implemented an AI-based image summarization tool that reduced diagnostic processing time by 35%, enhancing decision-making efficiency.
              `}
            />
          </Col>

          {/* Ooredoo Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Backend Developer Intern - Ooredoo"
              startDate="July 2024"
              endDate="Sep 2024"
              description={`• Designed and developed scalable backend APIs using Go and Node.js, optimizing data flow and improving system reliability.
              
              • Engineered and deployed containerized microservices using Docker and Kubernetes, improving system scalability and maintainability.
              
              • Refactored API interactions, reducing response times and improving service integration efficiency by 20%.
              `}
              certificate={ooredooCert}
            />
          </Col>

          {/* ScrambleBit Internship */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Full-Stack Developer Intern - ScrambleBit"
              startDate="July 2024"
              endDate="Aug 2024"
              description={`• Developed a comprehensive Pharmacy Sales Management System, enhancing inventory tracking, sales processing, and reporting efficiency.
              
              • Built a secure and scalable backend using Node.js and PostgreSQL, integrating it with a React.js frontend.
              
              • Optimized database queries and implemented real-time data updates, improving transaction speed and operational efficiency.
              `}
              certificate={mrBitsCert}
            />
          </Col>

          {/* Freelancer Experience */}
          <Col md={6} className="project-card">
            <ExperienceCards
              title="Freelancer - Full Stack Developer"
              startDate="2023"
              endDate="Present"
              description={`• Designed and developed 20+ full-stack projects, including an AI-powered clinic system, an intelligent farm management platform, and a scalable e-commerce solution.
              
              • Optimized database performance, improving query execution speed by 35% through indexing and query refactoring.
              
              • Implemented secure authentication using JWT, ensuring data security across all projects.
              `}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;

