import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./news-letter.scss";
import newsLetterImg from "../../assets/tour-images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section id="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content py-12">
              <h2>Đăng ký ngay để được tư vấn</h2>
              <div className="newsletter__input relative my-5">
                <input
                  className="w-full shadow py-3 px-2 outline-none"
                  type="text"
                  placeholder="Nhập email của bạn"
                />
                <button className="btn newsletter__btn text-white absolute right-0 top-1/2 -translate-y-1/2 mr-2 px-3">
                  Gửi
                </button>
              </div>
              <p className=" text-justify">
                Đăng ký ngay để được đội ngũ chúng tôi tư vấn với lòng say mê và
                sự am hiểu sâu sắc về du lịch. Chúng tôi sẽ lắng nghe mong muốn
                của bạn, đưa ra những gợi ý phù hợp và tạo ra một lịch trình du
                lịch tùy chỉnh, đáp ứng đầy đủ các yêu cầu và sở thích cá nhân.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img className=" w-full" src={newsLetterImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
