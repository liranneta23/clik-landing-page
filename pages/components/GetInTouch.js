import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";

import { BsFillPeopleFill, BsQuestionLg } from "react-icons/bs";

import { HiLightBulb } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import axios from "axios";

const GetInTouch = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("contact@clikplatform.nl");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState({ isExist: false, message: "" });
  const [error, setError] = useState({ isExist: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setError({ isExist: false });
    setSuccess({ isExist: false });
    setShow(false);
  };
  const handleShow = () => {
    setError({ isExist: false });
    setSuccess({ isExist: false });
    setShow(true);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "/api/contact",
        { email, text },
        {
          config: { "Content-Type": "application/json" },
        }
      );
      setLoading(false);
      setSuccess({ isExist: true, message: data.message });
      setError({ isExist: false });
    } catch (error) {
      setLoading(false);
      setSuccess({ isExist: false, message: "" });

      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      setError({ isExist: true, message: err });
    }
  };

  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center bolder">Get In Touch</h2>
      <Row className="justify-content-center align-items-center">
        {/*<Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-right">
            <HiLightBulb size={75} color="black" />
            <address className="my-3">support@clikplatform.nl</address>

            <Button
              className="text-white card-btn"
              variant="success"
              onClick={() => {
                handleShow();
                setEmail("support@clikplatform.nl");
              }}
            >
              Get Support
            </Button>
          </article>
        </Col> */}
        <Col md={4}>
          <article className="my-card green big" data-aos="zoom-in">
            <BsFillPeopleFill size={75} color="white" />
            <span>If you'd like to join the team or if you have any suggestions or advice, feel free to email us!</span>
            <address className="white my-2"> info@clikplatform.nl</address>
            {/* <span className="text-white card-a ">
              <Link href="#get-in-touch">Join The Team</Link>
            </span> */}
          </article>
        </Col>
        {/*
        <Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-left">
            <HiLightBulb size={75} color="black" />
            <address className="my-3">contact@clikplatform.nl</address>
            <Button
              variant="success"
              className="text-white card-btn"
              onClick={() => {
                handleShow();
                setEmail("contact@clikplatform.nl");
              }}
            >
              Ask a question
            </Button>
          </article>
            </Col> */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Send us an Email</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {loading && <Alert variant="info">Loading......</Alert>}
            {error.isExist && <Alert variant="danger">{error.message}</Alert>}
            {success.isExist && (
              <Alert variant="success">{success.message}</Alert>
            )}
            <Form
              style={{ width: "100%", maxWidth: "400px" }}
              onSubmit={handleSubmit}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Our Email</Form.Label>
                <Form.Control type="email" value={email} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </Container>
  );
};

export default GetInTouch;
