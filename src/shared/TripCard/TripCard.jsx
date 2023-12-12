import React, { useState, useEffect, useCallback, useContext } from "react";

import axios from "../../axios";
import { format } from "date-fns";
import { formattedPrice } from "../../utils/formatPriceVi";
import { DateRange } from "react-date-range";
import { useForm } from "react-hook-form";
import { Container, Form, ListGroup } from "reactstrap";
import RatingReviews from "../../components/Rating/RatingReviews";
import BasicModal from "../../components/Modal/Modal";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TripCard = ({ trip }) => {
  const { tourId, tourName, fullName, guestSize, guestChild, pay1, pay2 } =
    trip;
  const { user, dispatch } = useContext(AuthContext);
  const [tour, setTour] = useState([]);
  const [apiCallFinished, setApiCallFinished] = useState(false);

  const [pay1Success, setPay1Success] = useState(true);
  const [pay2Success, setPay2Success] = useState(pay2);
  const [statusTour, setStatusTour] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [TourRating, setTourRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => setIsOpen(true);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    console.log(isOpen);
  }, [isOpen]);

  const handleRatingChange = (newValue) => {
    // Nhận giá trị mới từ RatingReviews và sử dụng nó ở đây
    setTourRating(newValue);
  };
  const handleChange = async (e) => {
    setReviewText(e.target.value);

    console.log(reviewText);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      const reviewObj = {
        userNameReview: user.userName,
        reviewText,
        rating: TourRating,
      };
      const res = await axios.post(`/review/${tourId}`, reviewObj);
      navigate(0);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    axios
      .get(`/tour/${tourId}`)
      .then((res) => {
        setTour(res.data);
        setApiCallFinished(true);
      })
      .catch((err) => {
        console.log(err);
        setApiCallFinished(true);
      });
  }, [tourId]);

  const { _id, departureDay, title, startGate, price } = tour;

  const priceChil = price * 0.3;

  const body = (
    <div className="tour__reviews mt-16 border-1 border-colorText p-10 rounded-lg">
      <Form onSubmit={submitHandler}>
        <RatingReviews
          initialRating={TourRating}
          onRatingChange={handleRatingChange}
        />
        <div className="review__input flex items-center relative">
          <input
            className="w-full p-3 rounded-full"
            type="text"
            id="reviewText"
            {...register("reviewText", { required: true })}
            onChange={handleChange}
            placeholder="share your thoughts"
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

      {/* <ListGroup className="user__reviews mt-10">
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
    </ListGroup> */}
    </div>
  );

  return (
    // <div className="row py-8 p-4">
    //   <div className="col-lg-3 border-[1px]">
    //     <p className=" text-xl font-bold text-secondaryy">Thông tin tour</p>
    //     <div className="flex flex-col gap-2">
    //       <p>{title}</p>

    //       <p className="">
    //         <strong>Địa điểm xuất phát:</strong> {startGate}
    //       </p>
    //       <p className="">
    //         <strong>Ngày xuất phát:</strong>
    //         {departureDay ? format(new Date(departureDay), "yyyy-MM-dd"): ""}{" "}
    //       </p>

    //       <p>
    //         <strong>Đơn giá :</strong> {formattedPrice(price)}/người
    //       </p>
    //     </div>
    //   </div>
    //   <div className="col-lg-9 border-[1px]">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <h5 className="mb-4">Thông tin chuyến đi</h5>
    //         <div className="mt-3 flex flex-col gap-2">
    //           <p>
    //             Số người lớn: {guestSize} x {formattedPrice(price * guestSize)}
    //           </p>
    //           <p>
    //             Số trẻ em: {guestChild}x{" "}
    //             {formattedPrice(priceChil * guestChild)}
    //           </p>
    //           <p>
    //             Tổng tiền:{" "}
    //             {formattedPrice(price * guestSize + priceChil * guestChild)}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-lg-2">
    //         <p className="mb-4">Thanh toán lần 1</p>
    //         {pay1Success ? (
    //           <h5 className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
    //             Đã thanh toán
    //           </h5>
    //         ) : (
    //           <h5>Đang thanh toán</h5>
    //         )}
    //       </div>
    //       <div className="col-lg-2">
    //         <p className="mb-4">Thanh toán lần 2</p>
    //         {pay2Success ? (
    //           <h5 className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
    //             Đã thanh toán
    //           </h5>
    //         ) : (
    //           <h5 className="text-sm p-4 mb-4">Đang thanh toán</h5>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="row py-8 p-4">
      <div className="col-lg-3 border-[1px]">
        <p className=" text-xl font-bold text-secondaryy">Thông tin tour</p>
        <div className="flex flex-col gap-2">
          <p>{tourName}</p>

          <p className="">
            <strong>Địa điểm xuất phát:</strong> {startGate}
          </p>
          <p className="">
            <strong>Ngày xuất phát:</strong>
            {departureDay
              ? format(new Date(departureDay), "yyyy-MM-dd")
              : ""}{" "}
          </p>

          <p>
            <strong>Đơn giá :</strong> {formattedPrice(price)}/người
          </p>
        </div>
      </div>
      <div className="col-lg-3 lg:border-y-[1px] lg:border-r-[1px] border-x-[1px] border-b-[1px]">
        <h5 className="mb-4 text-xl font-bold text-secondaryy">
          Thông tin chuyến đi
        </h5>
        <div className="mt-3 flex flex-col gap-2">
          <p>
            Số người lớn: {guestSize} x {formattedPrice(price * guestSize)}
          </p>
          <p>
            Số trẻ em: {guestChild}x {formattedPrice(priceChil * guestChild)}
          </p>
          <p>
            Tổng tiền:{" "}
            {formattedPrice(price * guestSize + priceChil * guestChild)}
          </p>
        </div>
      </div>
      <div className="col-lg-2 lg:border-y-[1px] lg:border-r-[1px] border-x-[1px] border-b-[1px]">
        <p className="mb-4 text-xl font-bold text-secondaryy">
          Thanh toán lần 1
        </p>
        {pay1Success ? (
          <h5 className="mt-[80px] text-center p-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
            Đã thanh toán
          </h5>
        ) : (
          <h5>Đang thanh toán</h5>
        )}
      </div>
      <div className="col-lg-2 lg:border-y-[1px] lg:border-r-[1px] border-x-[1px] border-b-[1px]">
        <p className="mb-4 text-xl font-bold text-secondaryy">
          Thanh toán lần 2
        </p>
        {pay1Success ? (
          <h5 className="text-center mt-[80px] p-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
            Đã thanh toán
          </h5>
        ) : (
          <h5>Đang thanh toán</h5>
        )}
      </div>
      <div className="col-lg-2 lg:border-y-[1px] lg:border-r-[1px] border-x-[1px] border-b-[1px]">
        <p className="mb-4 text-xl font-bold text-secondaryy">Trạng thái</p>
        {statusTour ? (
          <h5
            onClick={handleOpen}
            className=" cursor-pointer text-center mt-[80px] p-2 text-sm text-green-800 rounded-lg bg-yellow-400 dark:bg-gray-800 dark:text-green-400"
          >
            Hoàn thành
          </h5>
        ) : (
          <h5 className="text-center mt-[0px] p-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
            Đang đi
          </h5>
        )}
      </div>
      <BasicModal body={body} handleClose={handleClose} isOpen={isOpen} />
    </div>
  );
};

export default TripCard;
