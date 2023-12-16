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
import Invoice from "../components/SendMail";

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
                      <Subtitle subtitle={"Biết trước khi bạn đi?"} />
                      <img className=" h-10" src={worldImg} alt="" />
                    </div>
                    <h1>
                      Du lịch giúp mở ra{" "}
                      <span className="highlight"> cơ hội</span> và tạo ra những
                      <span className="highlight"> kỷ niệm</span>
                    </h1>
                    <p className="leading-loose">
                      Khám phá thế giới và tạo dấu ấn không thể quên: Du lịch -
                      Khám phá, Trải nghiệm và Ghi lại những Kỷ niệm đáng nhớ
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
          {/* <section id="services">
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
          </section> */}
          <section id="featured__tour">
            <Container>
              <Subtitle subtitle={"Khám phá"} />
              <h2 className="title font-medium text-4xl">Các tour nổi bật</h2>
              <Row>
                <FeaturedToursList />
              </Row>
            </Container>
          </section>
          <section id="experience">
            <Container>
              <Row>
                <Col lg="7">
                  <div className="experience__content">
                    <Subtitle subtitle={"Kinh nghiệm"} />
                    <h2>
                      Với những kinh nghiệm của chúng tôi <br /> chúng tôi sẽ
                      cung cấp cho bạn dịch vụ tốt nhất
                    </h2>
                    <p className=" w-96 text-justify">
                      Đội ngũ của chúng tôi là những chuyên gia du lịch giàu
                      kinh nghiệm, luôn sẵn sàng lắng nghe và tư vấn cho bạn
                      những chuyến đi hoàn hảo, phù hợp với mong muốn và sở
                      thích cá nhân. Chúng tôi không chỉ đảm bảo cho bạn một
                      lịch trình tuyệt vời, mà còn xem trách nhiệm và sự chăm
                      sóc khách hàng là ưu tiên hàng đầu.
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
                <Col lg="5">
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
                  <h2 className=" mb-4">
                    Hãy đồng hành cùng chúng tôi để khám phá những địa điểm thú
                    vị trên cả nước
                  </h2>
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
                  <h2 className=" mb-4">Cùng chúng tôi khám phá thế giới</h2>
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
                  <Subtitle subtitle={"Phản hồi từ khách hàng"} />
                </Col>
                <Col lg="12">
                  <Testimonial />
                </Col>
              </Row>
            </Container>
          </section>
          <NewsLetter />
          <Invoice />
        </>
      )}
    </>
  );
};

export default Home;
