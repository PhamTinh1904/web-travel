import React, { useEffect, useState } from "react";

import "../scss/Home.scss";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar/SearchBar";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/tour-images/hero-img01.jpg";
import heroImg02 from "../assets/tour-images/hero-img02.jpg";
import heroVideo from "../assets/tour-images/hero-video.mp4";
import worldImg from "../assets/tour-images/world.png";
import ServiceList from "../services/ServiceList";
import FeaturedToursList from "../components/FeaturedTours/FeaturedToursList";
import experienceImg from "../assets/tour-images/experience.png";
import MasonryImagesGallery from "../components/Img-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter/NewsLetter";
import axios from "../axios";
import ReactLoading from "react-loading";
import MasonryImagesGallery2 from "../components/Img-gallery/MasonryImagesGallery2";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`/tours`)
      .then((res) => {
        setIsLoading(true);
        setTours(res.result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    tours.map((tour, index) => console.log);
  }, [tours]);

  return (
    <>
      {isLoading && (
        <ReactLoading
          className="flex justify-center items-start m-auto"
          type="spin"
          color="#333"
          height={"5%"}
          width={"5%"}
        />
      )}
      {!isLoading && (
        <>
          {" "}
          <section>
            <div className="container">
              <Row>
                <Col lg="6">
                  <div className="hero__content">
                    <div className="hero__subtitle flex items-center">
                      <Subtitle subtitle={"Know Before You Go"} />
                      <img className=" h-10" src={worldImg} alt="" />
                    </div>
                    <h1>
                      Tralveling opens the door to creating
                      <span className="highlight"> memories</span>
                    </h1>
                    <p className="leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dicta amet velit voluptate provident quo minus corrupti,
                      eveniet, sunt ipsam quos corporis nihil aperiam explicabo
                      nam saepe quaerat alias eius et.
                    </p>
                  </div>
                </Col>

                <Col lg="2">
                  <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg="2">
                  <div className="hero__img-box mt-3">
                    <video src={heroVideo} controls></video>
                  </div>
                </Col>
                <Col lg="2">
                  <div className="hero__img-box mt-4">
                    <img src={heroImg02} alt="" />
                  </div>
                </Col>
              </Row>
              <SearchBar />
            </div>
          </section>
          <section id="services">
            <Container>
              <Row>
                <Col lg="3" md="6" xs="12">
                  <h5 className="services__subtitle text-3xl font-medium">
                    What are service
                  </h5>
                  <h2 className="services__title font-medium">
                    We offer our best services
                  </h2>
                </Col>
                <ServiceList />
              </Row>
            </Container>
          </section>
          <section id="featured__tour">
            <Container>
              <Subtitle subtitle={"Explore"} />
              <h2 className="title font-medium text-4xl">Our featured tours</h2>
              <Row>
                <FeaturedToursList />
              </Row>
            </Container>
          </section>
          <section id="experience">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="experience__content">
                    <Subtitle subtitle={"Experience"} />
                    <h2>
                      With our all experience <br /> we will serve you
                    </h2>
                    <p className=" w-96 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea ad veniam quis, officia reiciendis atque quam nostrum
                      vero corrupti ullam iure distinctio, delectus suscipit
                      cumque eaque libero sint illo pariatur.
                    </p>
                  </div>
                  <div className="counter__wrapper pt-4 flex items-center justify-around gap-5">
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successful</h6>
                    </div>
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successful</h6>
                    </div>
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successful</h6>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="experience__img">
                    <img
                      className=" w-11/12 object-cover"
                      src={experienceImg}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section id="gallery">
            <Container>
              <Row>
                <Col lg="12">
                  <Subtitle subtitle={"Du lịch nội địa"} />
                  <h2 className=" mb-4">Visit our customers tours gallery</h2>
                </Col>
                <Col lg="12">
                  <MasonryImagesGallery />
                </Col>
              </Row>
            </Container>
          </section>
          <section id="gallery">
            <Container>
              <Row>
                <Col lg="12">
                  <Subtitle subtitle={"Du lịch nước ngoài"} />
                  <h2 className=" mb-4">Visit our customers tours gallery</h2>
                </Col>
                <Col lg="12">
                  <MasonryImagesGallery2 />
                </Col>
              </Row>
            </Container>
          </section>
          <section id="testimonial">
            <Container>
              <Row>
                <Col lg="12">
                  <Subtitle subtitle={"Fans Love"} />
                  <h2 className=" mt-4">What our fans saying abou us</h2>
                </Col>
                <Col lg="12">
                  <Testimonial />
                </Col>
              </Row>
            </Container>
          </section>
          <NewsLetter />
        </>
      )}
    </>
  );
};

export default Home;
