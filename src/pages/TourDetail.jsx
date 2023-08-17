import React, { useRef, useState, useEffect, useContext } from "react";
import "../scss/Tour-detail.scss";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../axios";
import calculateAvgRating from "../utils/avgRating";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/tour-images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import { AuthContext } from "../context/AuthContext";

const ToursDetail = () => {
  const [tour, setTour] = useState([]);
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [TourRating, setTourRating] = useState(0);
  const [apiCallFinished, setApiCallFinished] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/tour/${id}`)
      .then((res) => {
        setTour(res.data);
        setApiCallFinished(true);
      })
      .catch((err) => {
        console.log(err);
        setApiCallFinished(true);
      });
  }, [id]);

  useEffect(() => {
    if (apiCallFinished && tour.length > 0) {
      const { reviews } = tour;
      const { totalRating, avgRating } = calculateAvgRating(reviews);
      // ... (other code using "totalRating" and "avgRating")
    }
  }, [apiCallFinished, tour]);

  if (!apiCallFinished || tour.length === 0) {
    return null;
  }

  const {
    title,
    city,
    address,
    distance,
    photo,
    desc,
    price,
    maxGroupSize,
    reviews,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();

    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      const reviewObj = {
        userNameReview: user.userName,
        reviewText,
        rating: TourRating,
      };
      const res = await axios.post(`/review/${id}`, reviewObj);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info mt-4 border-1 pt-4 pb-20 px-4 border-secondary rounded-lg">
                  <h2>{title}</h2>
                  <div className="flex items-center gap-5">
                    <span className="tour__rating text-sm flex items-center gap-1">
                      <FontAwesomeIcon
                        className="start__icon text-secondaryy"
                        icon={faStar}
                      />
                      {calculateAvgRating === 0 ? null : avgRating}{" "}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details flex gap-5 mt-4">
                    <span>
                      <i className="ri-map-pin-2-fill"></i>
                      {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>${price} /
                      per person
                    </span>
                    <span>
                      <i className="ri-group-line"></i>
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5 className="pt-5">Descripction</h5>
                  <p className=" text-colorText leading-8">{desc}</p>
                </div>

                <div className="tour__reviews mt-16 border-1 border-colorText p-10 rounded-lg">
                  <h4>Reviews ( {reviews.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="flex items-center gap-3 mb-6 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review__input flex items-center relative">
                      <input
                        className="w-full p-3 rounded-full"
                        type="text"
                        placeholder="share your thoughts"
                        ref={reviewMsgRef}
                        required
                      />
                      <button
                        className="primary__btn absolute right-0 top-1/2 -translate-y-1/2 mr-3 text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews mt-10">
                    {reviews?.map((review) => (
                      <div className="review__item flex items-start gap-x-4 mb-8">
                        <img
                          className=" w-14 rounded-full object-cover"
                          src={avatar}
                          alt=""
                        />
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className=" text-sm">
                                {review.userNameReview}
                              </h5>
                              <p className=" text-colorText">
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="flex items-center">
                              {review.rating}
                              <i className="ri-star-fill text-secondaryy"></i>
                            </span>
                          </div>
                          <h6 className="">{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ToursDetail;
