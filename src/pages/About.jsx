import { Col, Container, Row } from "reactstrap";
import NewsLetter from "../shared/NewsLetter/NewsLetter";

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <h2>Về chúng tôi</h2>
            <h5>
              Khám phá Thế Giới Với Chuyến Hành Trình Tuyệt Vời Của Chúng Tôi!
              Chào mừng bạn đến với trang web của chúng tôi - một điểm đến đặc
              biệt dành cho những người yêu thích du lịch và muốn khám phá những
              điều mới mẻ trong cuộc sống. Chúng tôi tự hào giới thiệu dịch vụ
              tour du lịch của chúng tôi, nơi chúng tôi mang đến cho bạn những
              trải nghiệm du lịch đáng nhớ và không thể quên. Với chúng tôi, du
              lịch không chỉ là việc ghé thăm những địa điểm mới và tham quan
              các danh lam thắng cảnh. Đó là một chuyến hành trình khám phá, nơi
              bạn có thể trải nghiệm văn hóa độc đáo của mỗi điểm đến, tìm hiểu
              về lịch sử, nếp sống và con người. Chúng tôi tin rằng du lịch là
              cách tuyệt vời để mở rộng tầm nhìn, làm giàu kiến thức và tạo ra
              những kỷ niệm vô giá. Với dịch vụ tour du lịch của chúng tôi, bạn
              sẽ được đắm mình trong những chuyến đi đầy màu sắc và đa dạng.
              Chúng tôi cung cấp các tour du lịch từ những thành phố sôi động
              đến những điểm đến hoang sơ, từ những chuyến hành trình tham gia
              hoạt động mạo hiểm đến những chuyến du lịch thư giãn và nghỉ
              dưỡng. Bất kể bạn muốn khám phá những ngôi đền cổ kính, ngắm nhìn
              cảnh quan tuyệt đẹp hay khám phá văn hóa đặc trưng của một quốc
              gia, chúng tôi sẽ đưa bạn đến những điểm đến tuyệt vời nhất. Chúng
              tôi hiểu rằng mỗi người có những sở thích và mong muốn riêng, vì
              vậy chúng tôi luôn cố gắng tạo ra những chuyến đi đa dạng và linh
              hoạt. Bạn có thể lựa chọn từ các tour du lịch ngắn ngày, tour du
              lịch dài hơn hoặc thậm chí đặt tour du lịch theo yêu cầu. Chúng
              tôi sẽ luôn lắng nghe và tư vấn để đảm bảo rằng chuyến đi của bạn
              sẽ trở thành một trải nghiệm tuyệt vời. Đội ngũ chuyên viên của
              chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình chọn tour, đặt
              tour và trả lời mọi câu hỏi của bạn. Chúng tôi cam kết mang đến
              cho bạn sự chuyên nghiệp, tận tâm và dịch vụ tốt nhất. Hãy để
              chúng tôi trở thành người bạn đồng hành trong hành trình khám phá
              thế giới của bạn. Đến với chúng tôi và hãy chuẩn bị cho một chuyến
              đi tuyệt vời đầy kỷ niệm!
            </h5>
            <div className=" mt-12">
              <h2>Thông tin liên hệ.</h2>
              <h5>
                <strong>Email: </strong>phamtinhpy2017@gmail.com
              </h5>
              <h5>
                <strong>Điện thoại: </strong>0359680831
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <NewsLetter />
    </>
  );
};

export default About;
