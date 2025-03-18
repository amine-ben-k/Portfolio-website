import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import laborHome from "../../Assets/Projects/laborhome.png";
import stats from "../../Assets/Projects/stats.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import dashbot from "../../Assets/Projects/dashbot.png";
import futureInsight from "../../Assets/Projects/future-insight.png";
import clinicHome from "../../Assets/Projects/clinic-homepage.png";
import calendar from "../../Assets/Projects/calendar.png";
import appointmentDetails from "../../Assets/Projects/appointments-details.png";
import patientDocs from "../../Assets/Projects/patient-documents.png";
import patientList from "../../Assets/Projects/patients-list.png";
import scheduleApp from "../../Assets/Projects/schedule-appointment.png";
import perscriptions from "../../Assets/Projects/perscriptions.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[clinicHome, scheduleApp, calendar, patientList, appointmentDetails,perscriptions, patientDocs]}
              isBlog={false}
              title="AI-Powered Medical Clinic"
              description={`Developed a full-stack medical website aimed at facilitating consultations 
                and diagnostic support for doctors. This platform leverages cutting-edge AI tools such 
                as Large Language Models (LLMs) to streamline patient care and enhance the accuracy of diagnoses.
                
                Key Features:
                - Voice Recognition: Enables doctors to input patient data and medical notes through speech, improving efficiency during consultations.
                - Image Summarization: Allows doctors to upload medical reports and receive concise summaries of the content to assist with diagnostic interpretations.
                - LLM-powered Consultation: Provides medical insights and suggestions based on patient data and symptoms, offering real-time support for decision-making.
                - Patient Management System: Securely manages patient records, including personal information, medical history, diagnostic tests, and treatment plans.
                
                Impact:  
                This platform significantly reduces the time spent on manual data entry and analysis, allowing doctors to focus more on patient care. The combination of advanced AI features and user-friendly design ensures that healthcare professionals can deliver more accurate and efficient consultations.
                
                Technologies Used:
                - Frontend: Built using React.js for a smooth and responsive user experience.
                - Backend: Developed with Node.js and Express.js to handle API requests, data processing, and interactions with the LLM.
                - LLM Integration: OpenAI and other LLM tools are used for voice recognition, image summarization, and consulation, providing powerful AI-driven insights.
                - Database: Managed with PostgreSQL to securely store patient data, reports, and medical images.
                `}
              ghLink="https://github.com/your-repo"
              demoLink="https://your-demo-link.com"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[dashbot, laborHome, stats, chatbot, futureInsight]}
              isBlog={false}
              title="Qatar Labor Market Data Visualization & AI Chatbot"
              description={`I developed an interactive data visualization platform and an AI-powered chatbot 
                to analyze Qatar’s labor market trends. The project integrates React.js, Node.js, PostgreSQL, 
                and OpenAI’s GPT-3.5 to provide dynamic insights and visual analytics based on real labor market data.
                
                Key Features:
                - Interactive Dashboards: Built separate dashboards for nationality-based and gender-based 
                  labor comparisons, integrating various charts (bar, pie, line).
                - AI-Powered Chatbot: Users can ask questions about the labor market, and the chatbot 
                  suggests relevant graphs while generating insights based on real-time data.
                
                Technology used:
                - Frontend: React.js, TailwindCSS
                - Backend: Node.js, Express.js
                - Database: PostgreSQL
                - AI Integration: OpenAI GPT-3.5
                `}
                
              ghLink="https://github.com/amine-ben-k/Labour-qatar-frontend"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[clinicHome, scheduleApp, calendar, patientList, appointmentDetails, patientDocs]}
              isBlog={false}
              title="E-Commerce Platform with AI Search"
              description="Developed a feature-rich e-commerce platform with AI-driven neural search using Langchain and a vector database."
              ghLink="https://github.com/YR973/Capstone-Project"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


