import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <article className="faq py-5" id="faq">
      <Container>
        <h2 className="text-center">FAQs</h2>
        <Accordion defaultActiveKey="0" flush className="py-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Our mission?</Accordion.Header>
            <Accordion.Body>
            We will always strive to create better connected communities. Where individuals feel a strong sense of belonging .
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What is Clik?</Accordion.Header>
            <Accordion.Body>
            Clik is a community driven platform that initiates social interactivity by keeping you updated 
            and connected to the happenings in your locality. By highlighting what matters to you, you won&apos;t
            miss out on important events, marketplace and job listings and much more.
            Do you want to see changes or seek support for your ideas in your neighborhood? 
            Let your voice be heard in the local feedback feed. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How does Clik work?</Accordion.Header>
            <Accordion.Body>
            Clik operates on a simple principle: The more people use the app, 
            the more activities and items will be displayed on the main feed.
            The mainfeed is customizable based on user preferences.
            Thus, Clik relies on citizens like you, to update respective listings to the app.
            The more input, the more relevant the activities and items!

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How can Clik help you?</Accordion.Header>
            <Accordion.Body>
            Socializing should not require hard effort. Finding out about your community should not result in 
            full blown research. Therefore, Clik is the medium that seamlessly allows you to connect to individuals, 
            resources and activities within your community. 

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </article>
  );
};

export default FAQ;
