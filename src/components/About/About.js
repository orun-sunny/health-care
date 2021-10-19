import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO Online Medical service
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
                "We are delighted to work with My Online Therapy, a digital-first partner who will provide important mental health therapy to our members."
              </p>
              <p className="text-muted">
                Online therapy is psychotherapy that takes place over the phone, through video chat, or messaging, rather than in person. The industry has grown significantly over the last decade because it fills a real need: research has shown that 70% of people do not have access to traditional, in-office therapy.1

                But online therapy has made mental health treatment more affordable and accessible, even if you work unconventional hours, have children, don't have access to reliable transportation, or lack health insurance.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                Services offered using this site are generally not covered by health insurance, Medicare or Medicaid, but you can request a receipt to seek partial out-of-network reimbursement directly with your provider.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                In order to determine which online therapy services are the best, we surveyed over 100 users from each of the 33 different companies we looked at, then we sent detailed questionnaires to the businesses in order to gain further information about them. Here are the companies that came out on top in our reviews.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
