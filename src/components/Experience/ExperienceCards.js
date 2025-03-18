import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCalendar, BsFillImageFill } from "react-icons/bs";

function ExperienceCards(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card className="project-card-view"> {/* Keeping same project card styles */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        {/* Date Range */}
        <p className="experience-date">
          <BsCalendar /> {props.startDate} - {props.endDate}
        </p>

        {/* Description */}
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        {/* Certificate Button (Only if a certificate image exists) */}
        {props.certificate && props.certificate.match(/\.(jpeg|jpg|png|gif)$/) ? (
  <>
<Button
  variant="primary"
  onClick={() => setShowModal(true)}
  style={{ marginLeft: "10px" }} // Matches the Demo button style
>
  <BsFillImageFill /> &nbsp; View Certificate
</Button>



    {/* Modal for Certificate Image */}
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Certificate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.certificate}
          alt="Certificate"
          className="certificate-img"
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </Modal.Body>
    </Modal>
  </>
) : null}

      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;
