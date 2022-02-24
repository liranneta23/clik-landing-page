import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { appData } from "../../variables/data";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article className="bg-wh">
      <Container className="bg-wh">
        <h2 className="text-center pt-5 bolder">Our Mission</h2>
        <Row className="justify-content-center italic-style semi-bold" data-aos="zoom-in">
          We will always strive to create better connected communities <br />
          Where individuals feel a strong sense of belonging
        </Row>
      </Container>
    </article>
  );
};

export default OurMission;
