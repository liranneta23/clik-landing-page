import Image from "next/image";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { appData } from "../../variables/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Supporters = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article className="bg-wh">
      <Container className="bg-wh">
        <h2 className="text-center pt-5 bolder">Our Supporters</h2>
        <Row className="justify-content-center" data-aos="zoom-in">
          <Image
            src={appData.supporters}
            width={200}
            height={200}
            objectFit="contain"
            alt="clik supporters"
          />
          <Image
          src={appData.ohmygrill}
          width={200}
          height={200}
          objectFit="contain"
          alt="clik supporters"
          />
        </Row>
      </Container>
    </article>
  );
};

export default Supporters;
