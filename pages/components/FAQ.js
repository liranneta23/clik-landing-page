import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <article className="faq py-5" id="faq">
      <Container>
        <h2 className="text-center">FAQs</h2>
        <Accordion defaultActiveKey="0" flush className="py-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Clik?</Accordion.Header>
            <Accordion.Body>
              Clik is a community of people that let&apos;s you benefit from and
              add to the strengths of your local community via the marketplace,
              events, services, volunteering, donations, jobs, and accomodation
              listings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does Clik work?</Accordion.Header>
            <Accordion.Body>
              Clik relies on true citizens of the world like you, who register
              on the platform to share updates such as a product listing to
              operate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How can Clik help you?</Accordion.Header>
            <Accordion.Body>
              Clik serves as a viable medium that let&apos;s you share your
              thoughts about your community in the local feedback feed, promote
              an event, job offers, services and donations in the feed.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </article>
  );
};

export default FAQ;
