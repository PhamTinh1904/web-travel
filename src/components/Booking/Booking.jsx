import React, { useState, useContext } from "react";
import "./Booking.scss";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { zonedTimeToUtc } from "date-fns-tz";
import axios from "../../axios";
import { useForm } from "react-hook-form";
import { formattedPrice } from "../../utils/formatPriceVi";

import CalendarBooking from "../Calendar/Calendar";

const Booking = ({ tour, avgRating }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { price, reviews, title, _id } = tour;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [date, setDate] = useState(null);
  const newDate = new Date()
  const isoDate = zonedTimeToUtc(newDate, "UTC");
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourId: _id,
    tourName: title,
    fullName: "",
    phone: "",
    guestChild: 0,
    guestSize: 1,
    bookAt: "",
  });

  const handleDateChange = (newValue) => {
    setDate(newValue);
    
    
    
    console.log(isoDate);
    setBooking((prev) => ({
      ...prev,
      bookAt: isoDate,
    }));
  };

  const handleChange = async (e) => {
    await setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    console.log(booking);
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) +
    Number(price * 0.3) * Number(booking.guestChild) +
    Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // const accessToken = Cookies.get("accessToken");
      // await console.log(`accessToken: ${accessToken}`)
      // if (!accessToken) {
      //   return alert("Please sign in");
      // }

      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      // const res = await fetch(`http://localhost:3056/v1/api/booking`, {
      //   method: "post",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   credentials: "include",
      //   body: JSON.stringify(booking),
      // });
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
          {formattedPrice(price)}
          <span></span>
        </h3>
        <span className="tour__rating text-sm flex items-center">
          <i class="ri-star-fill text-secondaryy"></i>
          {avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>

      <h3 className="py-6">Thông tin</h3>
      <forms className="border-[1px] p-6 flex flex-col gap-3">
        <input
          className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
          placeholder="Họ tên"
          id="fullName"
          {...register("fullName", { required: true })}
          onChange={handleChange}
        />
        {errors.fullName && (
          <span className=" text-red-600">Vui lòng nhập họ tên</span>
        )}

        <input
          className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
          placeholder="Nhập số điện thoại"
          id="phone"
          {...register("phone", { required: true })}
          onChange={handleChange}
        />
        <input
          id="guestChild"
          className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
          placeholder="Trẻ em > 6 tuổi"
          type="number"
          {...register("guestChild", { required: true })}
          onChange={handleChange}
        />
        <input
          id="guestSize"
          className=" outline-none p-2 border-b-gray-300 border-b-[1px] border-solid w-full"
          placeholder="Người lớn"
          type="number"
          {...register("guestSize", { required: true })}
          onChange={handleChange}
        />

        <div className="booking__bottom mt-4">
          <ListGroup className="">
            <ListGroupItem className="border-0 px-0">
              <h5>Người lớn x {booking.guestSize}</h5>
              <span>{formattedPrice(price * booking.guestSize)}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Trẻ em x {booking.guestChild}</h5>
              <span>{formattedPrice(price * 0.3 * booking.guestChild)}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Chi phí khác</h5>
              <span>{formattedPrice(totalAmount * 0.1)}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Tổng tiền</h5>
              <span>{formattedPrice(totalAmount)}</span>
            </ListGroupItem>
          </ListGroup>
          {/* <CalendarBooking initalDate={date} onChangeDate={handleDateChange} /> */}

          <button
            className="btn primary__btn w-full text-white mt-4"
            onClick={handleClick}
          >
            Đặt ngay
          </button>
        </div>
      </forms>
    </div>
  );
};

export default Booking;
