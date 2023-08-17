import React from "react";
import "./Footer.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/tour-images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  {
    path: "#gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const discover = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="log">
              <img className=" w-1/2" src={logo} alt="" />
            </div>
            <p className=" text-justify py-3 m-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              nihil repudiandae consequuntur.
            </p>

            <ul className="social__links flex items-center pt-2 gap-4 p-0">
              <li className="social__item">
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>
              </li>
              <li className="social__item">
                <Link to="#">
                  <i class="ri-github-fill"></i>
                </Link>
              </li>
              <li className="social__item">
                <Link to="#">
                  <i class="ri-facebook-circle-fill"></i>
                </Link>
              </li>
              <li className="social__item">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg="3">
            <h5>Discover</h5>
            <ListGroup className="discover__links p-0">
              {discover.map((item, index) => (
                <ListGroupItem className="discover__item py-3" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5>Quick Links</h5>
            <ListGroup className="discover__links p-0">
              {quickLinks.map((item, index) => (
                <ListGroupItem className="discover__item py-3" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5>Contact</h5>
            <ListGroup className="discover__links contact__list p-0">
              <ListGroupItem>
                <h6 className="">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  Address:
                </h6>
                <p>Sylhet, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem>
                <h6 className="">
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  
                  Email:
                </h6>
                <p>phamtinhpy2017@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="flex">
                <h6 className="">
                  <span>
                  <FontAwesomeIcon icon={faPhone} />
                  </span>
                  
                  Phone:
                </h6>
                <p>0359680818</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className=" text-center">
            <p className="copyright">Copyright {year}, degisn and develop by Muhibur Raham. All right reserved.</p>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Footer;
