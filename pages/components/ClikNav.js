import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

import { appData } from "../../variables/data";

const ClikNav = () => {
  return (
    <Navbar bg="bg-pink" expand="lg" collapseOnSelect>
      <Container>
        {/* Row causes the navbar to misalign */}
        {/* <Row> */}
        <Navbar.Brand href="#home">
          <Image
            src={appData.logo}
            alt={`${appData.companyName} Logo`}
            width={133}
            height={81}
            objectFit="contain"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ph-5-lg">
            <span className="nav-link semi-bold">
              <Link href="/">Home</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#why">Why</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#contact">Contact</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#beta">Beta</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#faq">FAQ</Link>
            </span>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="/en">English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Row> */}
      </Container>
    </Navbar>
  );
};

export default ClikNav;
