import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import '../scss/ThankYou.scss'

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center pt-10">
            <div className="thank__you">
              <span className=" text-5xl text-green-500 mb-6">
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h3 className="my-6 text-5xl font-bold">Thank You</h3>
              <h6 className=" text-3xl mb-6">your tour is booked</h6>
              <Link className="btn primary__btn text-white w-1/4" to='/'>Back to Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
