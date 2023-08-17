import React, { useState, useContext } from "react";
import "./Booking.scss";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../axios";
import Cookies from "js-cookie";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // const accessToken = Cookies.get("accessToken");

      // if (!accessToken) {
      //   return alert("Please sign in");
      // }

      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      await console.log(booking);

      const res = await axios.post(`/booking`, booking);
      if (!res.success) {
        return alert(res.message);
      }

      console.log(res);

      navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="booking p-8 border sticky top-20">
      <div className="booking__top pb-8 border-b border-b-colorBorder flex item-centers justify-between">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating text-sm flex items-center">
          <i class="ri-star-fill text-secondaryy text-colorText"></i>
          {avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>

      <h3 className="py-6">Infomation</h3>
      <Form
        className="booking__info-form pt-8 p-4 border-1"
        onSubmit={handleClick}
      >
        <FormGroup>
          <input
            type="text"
            placeholder="Full name"
            name="fullname"
            id="fullName"
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Enter your phone"
            name="phone"
            id="phone"
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="flex items-center justify-between">
          <input
            type="date"
            placeholder="Enter your phone"
            name="bookAt"
            id="bookAt"
            required
            onChange={handleChange}
          />
          <input
            className="ml-3"
            type="number"
            placeholder="Guest"
            name="guestSize"
            id="guestSize"
            required
            onChange={handleChange}
          />
        </FormGroup>
      </Form>

      <div className="booking__bottom mt-4">
        <ListGroup className="">
          <ListGroupItem className="border-0 px-0">
            <h5>${price} x 1 person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service change</h5>
            <span>$10</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <button
          className="btn primary__btn w-full text-white mt-4"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
