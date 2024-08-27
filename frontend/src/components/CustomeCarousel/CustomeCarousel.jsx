import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CustomeCarousel.scss";

const CustomeCarousel = () => {
  
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const handleCreateButton = () => {
        if (isAuthenticated) {
            navigate("/stories/create");
        } else {
            alert("Please Login to create a new story");
            navigate("/login");
        }
    };
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img className="d-block w-100" src="\Images\static\book3.jpg" alt="First slide" />
                <Carousel.Caption>
                    <a href="">
                        <Button onClick={handleCreateButton}>Add a Story</Button>
                    </a>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="\Images\static\book1.jpg" alt="Second slide" />
                <Carousel.Caption>
                    <a href="">
                        <Button onClick={handleCreateButton}>Add a Story</Button>
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="\Images\static\book2.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <a href="">
                        <Button onClick={handleCreateButton}>Add a Story</Button>
                    </a>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomeCarousel;
