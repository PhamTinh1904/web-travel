import React from "react";
import "./Footer.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/tour-images/logo2.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  {
    path: "#gallery",
    display: "Điều khoản sử dụng",
  },
  {
    path: "/login",
    display: "Điều khoản thanh toán",
  },
  {
    path: "/register",
    display: "Chính sách bảo mật",
  },
];

const discover = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "about",
    display: "Về chúng tôi",
  },
  {
    path: "/tours",
    display: "Chuyến đi",
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
              <img className=" w-[100px]" src={logo} alt="" />
            </div>
            <p className=" text-justify py-3 m-0">
              Kết nối với chúng tôi.
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
            <h5>Liên kết</h5>
            <ListGroup className="discover__links p-0">
              {discover.map((item, index) => (
                <ListGroupItem className="discover__item py-3" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5>Điều khoản</h5>
            <ListGroup className="discover__links p-0">
              {quickLinks.map((item, index) => (
                <ListGroupItem className="discover__item py-3" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5>Liên hệ</h5>
            <ListGroup className="discover__links contact__list p-0">
              <ListGroupItem>
                <h6 className="">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  Địa chỉ:
                </h6>
                <p>Tân Phú, Tp. Hồ Chí Minh</p>
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
                  
                  Điện thoại:
                </h6>
                <p>0359680818</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className=" text-center">
            <p className="copyright"></p>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Footer;
