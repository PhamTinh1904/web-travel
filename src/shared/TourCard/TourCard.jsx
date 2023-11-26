import {
  faLocationDot,
  faStar,
  faCalendar,
  faUser,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./tour-card.scss";
import calculateAvgRating from "../../utils/avgRating";
import {format} from 'date-fns'
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";

const TourCard = ({ tour }) => {
  const { _id, title, photo,location, startGate, price, featured, reviews, departureDay, maxGroupSize, night, day} = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img relative">
          <img src={`https://res.cloudinary.com/dmjyrnybv/image/upload/v1694162206/tbmobhvclhpvys76lc8y.jpg`} alt="" />
          {featured && (
            <span className=" absolute right-0 bottom-0 p-1 text-white text-base">
              Featured
            </span>
          )}
        </div>
      </Card>

      <CardBody className="p-2 shadow-sm">
        <div className="card__top flex justify-between mb-2 items-center">
          <span className="tour__location font-medium">
            <FontAwesomeIcon
              className="location__icon px-1"
              icon={faLocationDot}
            />
            {location}
          </span>
          <span className="tour__rating text-sm">
            <FontAwesomeIcon className="start__icon" icon={faStar} />
            {avgRating === 0 ? null : avgRating}{" "}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="tour__title mb-2">
          <Link to={`/tour/${_id}`} className=" text-lg">
            {title}
          </Link>
        </h5>
        <p>
          <FontAwesomeIcon
            className="location__icon px-1"
            icon={faLocationDot}
          />
          Nơi khởi hành: {startGate}
        </p>
        <p>
          <FontAwesomeIcon
            className="location__icon px-1"
            icon={faCalendar}
          />
          Ngày khởi hành: {departureDay ? format(new Date(departureDay), 'yyyy-MM-dd'): ""}
        </p>
        <p>
          <FontAwesomeIcon
            className="location__icon px-1"
            icon={faClock}
          />
          Thời gian: {day} ngày {night} đêm
        </p>
        <p>
          <FontAwesomeIcon
            className="location__icon px-1"
            icon={faUser}
          />
          Số chỗ: {maxGroupSize}
        </p>

        <div className="card__bottom flex justify-between items-center pb-1">
          <h5 className=" text-base">
            {formattedPrice}
            <span className=" text-sm text-slate-950"> /người</span>
          </h5>
          <button className="booking__btn">
            <Link to={`/tour/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;
