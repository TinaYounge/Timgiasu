import React from "react";
import { Carousel } from "react-bootstrap";
import LandingPage from "../LandingPage/LandingPage";
// import LandingPage from "../LandingPage/LandingPage";

function TimCarousel() {
  return (
    <Carousel variant="" style={{ minHeight: "90vh" }}>
      <Carousel.Item variant="" style={{ minHeight: "90vh" }}>
        <LandingPage />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item variant="" style={{ minHeight: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8wE6FqtcxzDK4ukqVts_TU3AeJ1NXv6Rvw&usqp=CAU"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item variant="" style={{ minHeight: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://cdn.asianprivatebanker.com/wp-content/uploads/2019/12/ryoji-iwata-vWfKaO0k9pc-unsplash-800x400.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TimCarousel;
