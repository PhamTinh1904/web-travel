import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection/CommonSection";
import "../scss/Tour.scss";

import TourCard from "../shared/TourCard/TourCard";
import SearchBar from "../shared/SearchBar/SearchBar";
import NewsLetter from "../shared/NewsLetter/NewsLetter";
import { Col, Container, Row } from "reactstrap";
import axios from "../axios";
import useFetch from "../hooks/useFetch";
import { REACT_APP_BACKEND_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  // const [tours, setTours] = useState([]);
  // const [tourCount, setTourCount] = useState(0)

  // useEffect(() => {
  //   axios
  //     .get(`/tours?page=${page}`)
  //     .then((res) => {
  //       setTours(res.result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [page]);

  // useEffect(() => {
  //   axios
  //     .get(`/tours/search/getToursCount`)
  //     .then((res) => {
  //       setTourCount(res.result.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${REACT_APP_BACKEND_URL}/tours?page=${page}`);

 

  const {data: tourCount} = useFetch(`${REACT_APP_BACKEND_URL}/tours/search/getToursCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 300);
  }, [page, tourCount]);
  return (
    <>
      <CommonSection title={"All tours"} />
      <section className="ease-in">
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className=" text-center">Loading............</h4>}
          {error && <h4 className=" text-center">Loading.............</h4>}
          {!loading && !error && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" className=" mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination flex items-center justify-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      className={
                        page === number
                          ? "bg-secondaryy text-white w-8 h-8 rounded-full flex justify-center items-center border-1 border-secondaryy font-bold cursor-pointer"
                          : " w-8 h-8 rounded-full flex justify-center items-center border-1 border-secondaryy font-bold cursor-pointer"
                      }
                      key={number}
                      onClick={() => setPage(number)}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
