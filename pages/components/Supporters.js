import Image from "next/image";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
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
        <div data-aos="zoom-in">
          <Image
            src="../../public/foodies.PNG"
            width={1170}
            height={200}
            objectFit="contain"
            alt="clik supporters"
          />
        </div>
      </Container>
    </article>
  );
};

export default Supporters;
