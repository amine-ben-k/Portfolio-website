import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCards.css";

// Custom Arrow Components - Ensures no extra arrows appear
const CustomPrevArrow = ({ onClick }) => {
  return <button className="custom-prev-arrow" onClick={onClick}>‹</button>;
};

const CustomNextArrow = ({ onClick }) => {
  return <button className="custom-next-arrow" onClick={onClick}>›</button>;
};

function ProjectCards(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable automatic sliding
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Card className="project-card-view">
      <div className="slider-container">
        <Slider {...settings}>
          {props.imgPaths.map((img, index) => (
            <div key={index} className="slider-img-container">
              <Card.Img variant="top" src={img} alt={`slide-${index}`} className="slider-img"/>
            </div>
          ))}
        </Slider>
      </div>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
