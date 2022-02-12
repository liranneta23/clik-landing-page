import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLibraryAddCheck } from "react-icons/md";
import { appData } from "../../variables/data";

import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <article className="bg-wh" id="why">
      <Container className="py-3  text-center">
        <h2 className="py-5 bolder">Why Clik?</h2>
        <Row className="justify-content-center  why">
          <Col xs={12} md={4} className="py-3">
            <div data-aos="fade-right">
              <Image
                src={appData.target}
                width={64}
                height={64}
                alt=""
                //   className="green"
              />
            </div>

            <h4>Relevance</h4>
            <p>Get notified by activities and items that matter to you</p>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <div data-aos="zoom-in">
				<Image src={appData.allInOne} width={64} height={64} alt="" />
            </div>
            <h4>All in one</h4>
            <p>
              Benefit from, and add to the strengths of your local community via
              the marketplace, events, services, volunteering, donations, jobs,
              and accomodation listings
            </p>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <div data-aos="fade-left">
              <Image src={appData.influence} width={64} height={64} alt="" />
            </div>
            <h4>Influence</h4>
            <p>
              Impact change by sharing your thoughts about your community in the
              local feedback feed
            </p>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Why;
