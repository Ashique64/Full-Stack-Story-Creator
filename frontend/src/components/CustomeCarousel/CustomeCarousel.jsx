import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import "./CustomeCarousel.scss"

const CustomeCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\Images\static\CarouselBook2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <a href=""><Button>Add a Story</Button></a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\Images\static\CarouselBook3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href=""><Button>Add a Story</Button></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\Images\static\CarouselBook1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href=""><Button>Add a Story</Button></a>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CustomeCarousel