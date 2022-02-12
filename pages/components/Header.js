import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { appData } from "../../variables/data";

import AOS from "aos";
import "aos/dist/aos.css";
import OurForm from "./OurForm";

import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header>
      <Container className="p-5">
        <Row>
          <Col md={6} xs={12} className="my-5">
            <div data-aos="fade-right">
              <h1 className="clik">
                <strong>Access your community in Clik</strong>
              </h1>
              <p>
                {" "}
                Clik lets you benefit and contribute to your local community -
                Stay connected!
              </p>

              <OurForm />
              <Form.Text className="text-muted">
                Clik will soon be available, join wait list to stay informed
              </Form.Text>
              <br />
              <div style={{ marginTop: "15rem" }}>
                <strong className="grey">
                  <em>
                    Share Clik with family and friends, so they can join the
                    wait list too!!
                  </em>
                </strong>
                <br />
                <div className="share-buttons my-2">
                  <FacebookShareButton
                    quote={appData.quote}
                    hashtag={appData.hashtag}
                    url={appData.url}
                  >
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={appData.url}
                    title={appData.quote}
                    hashtags={[appData.hashtag]}
                    related={["@bonarhyme"]}
                  >
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                  <WhatsappShareButton title={appData.quote} url={appData.url}>
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>
                  <InstapaperShareButton
                    title={appData.quote}
                    url={appData.url}
                  >
                    <InstapaperIcon size={40} round={true} />
                  </InstapaperShareButton>
                </div>
              </div>
            </div>
          </Col>
          <Col md={(6, { order: "last" })} xs={(12, { order: "first" })}>
            <div data-aos="fade-left">
              <div className="feed" style={{ marginLeft: "25%" }}>
                {/* <video src={appData.Clik-Feeda}></video> */}
                <video width={300} muted autoPlay loop>
                  <source src="/Clik-Feed.mp4" type="video/mp4" />
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
