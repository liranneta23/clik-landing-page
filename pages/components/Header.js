import Image from "next/image";
import React, { useEffect, useState  } from "react";
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

  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    AOS.init({ duration: 1500 });

    const handleResize = () => {
      setScreenDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Update screen dimensions on component mount
    handleResize();

    // Update screen dimensions on window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  const maxVideoWidth = 300;
  const videoWidth = Math.min(maxVideoWidth, screenDimensions.width * 0.6);

  const maxDownloadButtonWidth = 300;
  const downloadButtonWidth = Math.min(maxDownloadButtonWidth, screenDimensions.width * 0.1);

  const router = useRouter();
  console.log(router);
  console.log(screenDimensions);
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
                    width={120}
                    height={80}
                    objectFit="contain"
                  />
                </a>
              </Link>

              <Link href="https://apps.apple.com/app/clik/id1659726779">
                <a style={{ marginLeft: '10px' }}>
                  <Image
                    src={appData.downloadOnAppStore}
                    width={120}
                    height={80}
                    objectFit="contain"
                  />
                </a>
              </Link>     
             
            </div>
          </Col>
          <Col md={(6, { order: "last" })} xs={(12, { order: "first" })}>
            <div data-aos="fade-left">
              <div className="justify-content-center">
                <video controls style={{maxWidth: "300px", width: "100%"}} muted autoPlay loop>
                  <source src="/Clik-Feed-ReactNative.mp4" type="video/mp4" />
                  <source src="/Clik-Feed-ReactNative.webm" type="video/webm" />
                  <p>
                    Your browser doesnt support HTML video. Here is a
                    <a href="/Clik-Feed-ReactNative.mp4">link to the app demonstration</a> instead.
                  </p>
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
