import Image from "next/image";
import Link from "next/link";
import UseRouter from 'next/router'; 

import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

import { appData } from "../../variables/data";

import en from "../../public/locales/en";
import nl from "../../public/locales/nl";


const ClikNav = () => {
  const router = UseRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : nl;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', {locale});
  }

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
              <Link href="/">{t.home}</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#why">{t.why}</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#contact">{t.contact}</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#beta">{t.beta}</Link>
            </span>

            <span className="nav-link semi-bold">
              <Link href="#faq">{t.faq}</Link>
            </span>
          </Nav>
          <Nav>
            <NavDropdown title={t.language} id="basic-nav-dropdown">
              <NavDropdown.Item href="/en">English</NavDropdown.Item>
              <NavDropdown.Item href="/nl">English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Row> */}
      </Container>
    </Navbar>
  );
};

export default ClikNav;
