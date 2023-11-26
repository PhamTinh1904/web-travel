import React, { useRef, useState, useEffect, useContext } from "react";
import "../scss/Tour-detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../axios";
import calculateAvgRating from "../utils/avgRating";
import {
  faCalendar,
  faClock,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocation,
  faStar,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/tour-images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import { AuthContext } from "../context/AuthContext";
import Rating from "../components/Rating/RatingReviews";
import RatingReviews from "../components/Rating/RatingReviews";
import ScheduleTour from "../shared/Schedule/ScheduleTour";
import { formattedPrice } from "../utils/formatPriceVi";
import { format } from "date-fns-tz";

const ToursDetail = () => {
  const [tour, setTour] = useState([]);
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [TourRating, setTourRating] = useState(0);

  const [apiCallFinished, setApiCallFinished] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRatingChange = (newValue) => {
    // Nhận giá trị mới từ RatingReviews và sử dụng nó ở đây
    setTourRating(newValue);
  };

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
    _id,
    title,
    startGate,
    address,
    distance,
    photo,
    desc,
    price,
    day,
    maxGroupSize,
    reviews,
    departureDay,
    night,
    lichtrinh,
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
      navigate(0);
    } catch (error) {
      alert(error.message);
    }
  };

  // const formattedPrice = new Intl.NumberFormat('vi-VN', {
  //   style: 'currency',
  //   currency: 'VND',
  // }).format(price);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img
                  src="https://res.cloudinary.com/dmjyrnybv/image/upload/v1694162206/tbmobhvclhpvys76lc8y.jpg"
                  alt=""
                />

                <div className="tour__info mt-4 border-y-[1px] pt-4 pb-20 px-4 border-[#e1e1e1] ">
                  <h1 className=" lg:text-4xl font-bold">{title}</h1>
                  {/* Reviews */}
                  <div className="flex items-center gap-5 my-4">
                    <span className="tour__rating text-[16px] flex items-center gap-1">
                      <FontAwesomeIcon
                        className="start__icon text-yellow-400"
                        icon={faStar}
                      />
                      {calculateAvgRating === 0 ? null : avgRating}{" "}
                      {console.log(totalRating)}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>
                  </div>
                  {/* Thông tin tour */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-[1.5rem] lg:gap-[6rem]">
                    <div className="flex flex-col gap-4">
                      <span className="text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faSun}
                        />
                        {day} Ngày
                      </span>
                      <span className=" text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faMoon}
                        />
                        {night} Đêm
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faUserGroup}
                        />
                        Số người tối đa: {maxGroupSize}
                      </span>
                      <span className="text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faCalendar}
                        />
                        Khởi hành:{" "}
                        {format(new Date(departureDay), "yyyy-MM-dd")}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faClock}
                        />
                        {day} Ngày
                      </span>
                      <span className="text-[18px]">
                        <FontAwesomeIcon
                          className="mr-3 text-[#f97454]"
                          icon={faLocationDot}
                        />
                        Điểm đón: {startGate}
                      </span>
                    </div>
                  </div>
                  {/* <div className="tour__extra-details flex gap-5 mt-4 mb-3">
                    <h5>
                      <i className="ri-map-pin-2-fill"></i>
                      Khởi hành tại:{` `}
                      {startGate}
                    </h5>

                    <h5>
                      <i className="ri-group-line"></i>
                      {maxGroupSize}
                    </h5>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5>
                      <i className="ri-money-dollar-circle-line"></i> Giá vé trẻ
                      em (từ 6 tuổi đến 11 tuổi): {formattedPrice(price * 0.3)}{" "}
                      / trẻ
                    </h5>
                  </div> */}
                </div>
                <div className="p-4">
                  <p className="text-[18px] text-colorText leading-8">{desc}</p>
                </div>

                <ScheduleTour schedules={lichtrinh} />

                <div className="tour__reviews mt-16 border-1 border-colorText p-10 rounded-lg">
                  <h4>Reviews ( {reviews.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <RatingReviews
                      initialRating={TourRating}
                      onRatingChange={handleRatingChange}
                    />
                    {/* <div className="flex items-center gap-3 mb-6 rating__group">
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
                    </div> */}

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
