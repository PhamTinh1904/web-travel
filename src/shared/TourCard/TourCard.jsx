import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./tour-card.scss";
import calculateAvgRating from "../../utils/avgRating";

const TourCard = ({ tour }) => {
  const { _id, title, photo, city, price, featured, reviews } = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img relative">
          <img src={`../assets/gallery-03-00db2e7b.jpg`} alt="" />
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
            {city}
          </span>
          <span className="tour__rating text-sm">
            <FontAwesomeIcon className="start__icon" icon={faStar} />
            {avgRating === 0 ? null : avgRating}{" "}
            {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
             
          </span>
        </div>
        <h5 className="tour__title mb-2">
          <Link to={`/tour/${_id}`} className=" text-lg">
            {title}
          </Link>
        </h5>
        <div className="card__bottom flex justify-between items-center pb-1">
          <h5 className=" text-base">
            ${price}{" "}
            <span className=" text-sm text-slate-950"> /per person</span>
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
