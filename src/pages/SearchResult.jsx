import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection/CommonSection";
import { useLocation } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import TourCard from "../shared/TourCard/TourCard";

const SearchResult = () => {
  const location = useLocation();

  const [tours] = useState(location.state);
  console.log(tours);

  return (
    <>
      <CommonSection title={"Tìm kiếm tours"} />

      <section>
        <Container>
          <Row>
            {!tours ? (
              <h4 className=" text-center">Không tìm thấy tour</h4>
            ) : (
              tours.map((tour) => (
                <Col lg="4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResult;
