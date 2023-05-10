import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <article className="faq py-5" id="faq">
      <Container>
        <h2 className="text-center">FAQs</h2>
        <Accordion defaultActiveKey="0" flush className="py-3">
          {/*<Accordion.Item eventKey="0">
            <Accordion.Header>Our mission?</Accordion.Header>
            <Accordion.Body>
            We will always strive to create better connected communities. Where individuals feel a strong sense of belonging .
            </Accordion.Body>
  </Accordion.Item> */}

          <Accordion.Item eventKey="1">
            <Accordion.Header>What is Clik?</Accordion.Header>
            <Accordion.Body>
            Clik is a community-driven platform that can help you find events and activities that align with your interests, 
            and even make it easier to meet new people in your new home. With the Event Stories feed, you can anonymously share your experiences, 
            seek advice or support, and connect with other members of the community. 
            Using Clik can help you feel more connected to your new neighbourhood and feel more at home in your new surroundings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How does Clik work?</Accordion.Header>
            <Accordion.Body>
            Clik's makes it possible for expats to post and share expat-friendly events, 
            while also enabling established event organizations and companies to post their events on our platform. 
            Browse and search for events based on your interests, location, and availability, 
            and start connecting with others in your local area.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How can Clik help you?</Accordion.Header>
            <Accordion.Body>
            Socializing should not require hard effort. Finding out about your community should not result in full blown research.
            Therefore, Clik is the medium that seamlessly allows you to connect with like-minded people within your community

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </article>
  );
};

export default FAQ;
