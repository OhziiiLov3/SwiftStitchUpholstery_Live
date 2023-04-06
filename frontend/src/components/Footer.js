import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
function Footer() {
    return (
      <div className="footer p-1">
        <Container>
          <Row>
            <Col className="col-lg-4 col-md-6 col-sm-6 my-2 p-2">
              <div className="d-flex">
                <p>New Jersey</p>
              </div>
              <div className="d-flex">
                <a href="tel:555-555-555">(510)925-7219</a>
              </div>
              <div className="d-flex">
                <p>Email: ssupholstrey@gmail.com</p>
              </div>
            </Col>
            <Col className="col-lg-2 col-md-6 col-sm-6 my-2">
              <div className="row">
                <div className="col">
                  <LinkContainer to="/">
                    <Link
                      to="/"
                      smooth={true}
                      offset={110}
                      className="footer-nav"
                    >
                      Home
                    </Link>
                  </LinkContainer>
                  <br />
                  <LinkContainer to="/about">
                    <Link
                      to="/about"
                      smooth={true}
                      offset={110}
                      className="footer-nav"
                    >
                      About
                    </Link>
                  </LinkContainer>
                  <br />
                  <LinkContainer to="/blog">
                    <Link
                      to="/blog"
                      smooth={true}
                      offset={110}
                      className="footer-nav"
                    >
                      Blog
                    </Link>
                  </LinkContainer>
                </div>
                <div className="col">
                  <LinkContainer to="/cart">
                    <Link
                      to="/cart"
                      smooth={true}
                      offset={110}
                      className="footer-nav"
                    >
                      Cart
                    </Link>
                  </LinkContainer>
                  <br />
                  <LinkContainer to="/profile">
                    <Link
                      to="/profile"
                      smooth={true}
                      offset={110}
                      className="footer-nav"
                    >
                      Profile
                    </Link>
                  </LinkContainer>
                  <br />
                  <Link
                    smooth={true}
                    to="contacts"
                    offset={-110}
                    href="#"
                    className="footer-nav"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Col>
            <Col className="col-lg-5 col-md-8 col-sm-8 align-itmes-center">
              <div className="d-flex justify-content-center p-3">
                <SocialIcon
                  className="me-2"
                  url="https://www.facebook.com/Swiftstitchupholstery/"
                />
                <SocialIcon
                  className="me-2"
                  url="https://www.instagram.com/swiftstitchupholstery/?hl=en"
                />
                <SocialIcon
                  className="me-3"
                  url="https://www.dropbox.com/Swiftstitchupholstery/"
                />
                <SocialIcon
                  className="me-3"
                  url="https://www.whatsapp/Swiftstitchupholstery/"
                />
              </div>
              <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Swift Stitch Upholstery | All
                Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer
