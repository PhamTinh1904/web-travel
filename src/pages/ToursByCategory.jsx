import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import useFetch from "../hooks/useFetch";
import { REACT_APP_BACKEND_URL } from "../utils/config";
import { Container, Row, Col } from "reactstrap";
import ReactLoading from "react-loading";
import TourCard from "../shared/TourCard/TourCard";
const ToursByCategory = () => {
  const { category } = useParams();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${REACT_APP_BACKEND_URL}/tours/${category}?page=${page}`);

  const { data: tourCount } = useFetch(
    `${REACT_APP_BACKEND_URL}/tours/search/getToursCount`
  );

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 300);
  }, [page, tourCount]);

  return (
    <section className="pt-0">
      <Container>
        {loading | error && (
          <ReactLoading
            className="flex justify-center items-start m-auto"
            type="spin"
            color="#333"
            height={"5%"}
            width={"5%"}
          />
        )}
        {!loading && !error && (
          <Row>
            {tours.map((tour) => (
              <Col lg="4" className=" mb-4" key={tour.id}>
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
  );
};

export default ToursByCategory;
