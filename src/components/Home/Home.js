import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg.png";
import { Container, Button, Row, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Service from "./../service/Service.js";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useServices from "../../hooks/useServices.js";

const Home = () => {
  const history = useHistory();
  const [Services] = useServices();
  const featureServices = Services.slice(0, 6);
  function GoServices() {
    history.push("/Services");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Our Benefits</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  Counseling care for the whole family!
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  View Services
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <section class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb mb-90">
          <div class="overlay"></div>
          <div class="container">
            <div class="row d-md-flex justify-content-center">
              <div class="col-md-12">
                <div class="wrap-appointment d-md-flex">
                  <div class="col-md-8 bg-primary p-5 heading-section heading-section-white">
                    <span class="subheading">Booking an Appointment</span>
                    <h2 class="mb-4">Free Consultation</h2>
                    <form action="#" class="appointment">
                      <div class="row justify-content-center d-flex">
                        <div class="col-md-6">
                          <div class="form-group">
                            <Form.Group
                              className="mb-3 text-white"
                              controlId="formBasicText"
                            >
                              <Form.Label>Your Name </Form.Label>
                              <Form.Control
                                // style={formStyle}
                                type="text"
                                placeholder="Enter Your Name"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 text-white"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Your Email </Form.Label>
                              <Form.Control
                                // style={formStyle}
                                type="email"
                                placeholder="Enter Your Email"
                              />
                            </Form.Group>

                          </div>
                        </div>

                        <div class="col-md-6 mt-2">
                          <div class="form-group">
                            <div class="form-field">
                              <div class="select-wrap">
                                <div class="icon"><span class="fa fa-chevron-down">choose your services</span></div>

                                <select name="" id="#" class="form-control">
                                  <option value="">Select Services</option>
                                  <option value="">Guidance and career counseling</option>
                                  <option value="">Rehabilitation counseling</option>
                                  <option value="">Mental health counseling</option>
                                  <option value="">Educational Counseling</option>
                                  <option value="">Therapeutic Exercise</option>
                                  <option value="">Substance abuse counseling</option>
                                </select>


                              </div>
                            </div>
                          </div>

                        </div>
                        <Button className="mb-5 px-6 mt-4" variant="light" type="submit">
                          Make a Appointment
                        </Button>

                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="input-wrap">
                              <div class="icon"><span class="fa fa-calendar"></span></div>
                              {/* <input type="text" class="form-control appointment_date" placeholder="Date"> */}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="input-wrap">
                              <div class="icon"><span class="fa fa-clock-o"></span></div>
                              {/* <input type="text" class="form-control appointment_time" placeholder="Time"> */}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            {/* <input type="submit" value="Send message" class="btn btn-secondary py-3 px-4"> */}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-4 bg-white text-center p-5">
                    <div class="desc border-bottom pb-4">
                      <h2>Business Hours</h2>
                      <div class="opening-hours">
                        <h4>Opening Days:</h4>
                        <p class="pl-3">
                          <span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
                          <span><strong>Saturday :</strong> 9am to 17 pm</span>
                        </p>
                        <h4>Vacations:</h4>
                        <p class="pl-3">
                          <span>All Sunday Days</span>
                          <span>All Official Holidays</span>
                        </p>
                      </div>
                    </div>
                    <div class="desc pt-4 ">
                      <h3 class="heading">For Emergency Cases</h3>
                      <span class="phone">(+088) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Featured services</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">

              “Flowers always make people better, happier, and more helpful; they are sunshine, food and medicine to the mind.”
            </p>
          </Slide>
          <Row>
            {featureServices?.map((service) => (
              <Service service={service} key={service.key}></Service>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
