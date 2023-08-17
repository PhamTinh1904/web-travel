import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection/CommonSection";
import { useLocation } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import TourCard from "../shared/TourCard/TourCard";

const SearchResult = () => {
  const location = useLocation();

  const [tours] = useState(location.state);

  return (
    <>
      <CommonSection title={"Search Tours"} />
      <section>
        <Container>
          <Row>
            {!tours ? (
              <h4 className=" text-center">No tour found</h4>
            ) : (
              tours.map((tour) => (
                <Col lg="3" key={tour._id}>
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
