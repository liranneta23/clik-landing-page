import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

import { Col, Container, Form, Row } from "react-bootstrap";
import { appData } from "../../variables/data";

import {useRouter} from 'next/router';


import AOS from "aos";
import "aos/dist/aos.css";
import OurForm from "./OurForm";

import en from "../../public/locales/en";
import nl from "../../public/locales/nl";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const router = useRouter();
  console.log(router);
  const {locale} = router;
  const t = locale === 'en'? en : nl; 


  return (
    <header>
      <Container className="p-5">
        <Row>
          <Col md={6} xs={12} className="my-5">
            <div data-aos="fade-right">
              <h1 className="clik">
                <strong>{t.hero}</strong>
              </h1>
              <p>
                On Clik you can find out the events that <strong>matter to you</strong> - Stay connected!
              </p>

              {/*
              <OurForm />
              <Form.Text className="text-muted">
                {t.soonavailable}
              </Form.Text>
              <br />
             */}
                           
              <Link href="https://play.google.com/store/apps/details?id=com.clik.platform">
                <a>
                  <Image
                    src={appData.getOnPlayStore}
                    width={135}
                    height={80}
                    objectFit="contain"
                  />
                </a>
              </Link>

              <Link href="https://apps.apple.com/app/clik/id1659726779">
                <a style={{ marginLeft: '10px' }}>
                  <Image
                    src={appData.downloadOnAppStore}
                    width={135}
                    height={80}
                    objectFit="contain"
                  />
                </a>
              </Link>     
             
            </div>
          </Col>
          <Col md={(6, { order: "last" })} xs={(12, { order: "first" })}>
            <div data-aos="fade-left" style={{ marginLeft: '20px' }}>
              <div className="justify-content-center">
                {/* <video src={appData.Clik-Feeda}></video> */}
                <video width={300} muted autoPlay loop objectFit="contain">
                  <source src="/Clik-Feed-ReactNative.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
