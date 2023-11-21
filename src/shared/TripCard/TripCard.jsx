import React, { useState, useEffect } from "react";

import axios from "../../axios";
import { format } from "date-fns";
import { formattedPrice } from "../../utils/formatPriceVi";
const TripCard = ({ trip }) => {
  const { tourId, tourName, fullName, guestSize, guestChild, pay1, pay2 } =
    trip;
  const [tour, setTour] = useState([]);
  const [apiCallFinished, setApiCallFinished] = useState(false);

  const [pay1Success, setPay1Success] = useState(true);
  const [pay2Success, setPay2Success] = useState(pay2);

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

  const {
    _id,
    departureDay,
    title,
    startGate,
    price,
  
  } = tour;

  const priceChil = price * 0.3;
  

  const formattedDepartureDay = async (date)=>{
    return format(new Date(date), "yyyy-MM-dd");
  } 

  return (
    <div className="row py-8">
      <div className="col-3 border-[1px]">
        <p className=" text-xl font-bold text-secondaryy">Thông tin tour</p>
        <div className="flex flex-col gap-2">
          <p>{title}</p>

          <p className="">
            <strong>Địa điểm xuất phát:</strong> {startGate}
          </p>
          <p className="">
            <strong>Ngày xuất phát:</strong>
            {formattedDepartureDay(departureDay)}{" "}
          </p>

          <p>
            <strong>Đơn giá :</strong> {formattedPrice(price)}/người
          </p>
        </div>
      </div>
      <div className="col-9 border-[1px]">
        <div className="row">
          <div className="col-6">
            <h5 className="mb-4">Thông tin chuyến đi</h5>
            <div className="mt-3 flex flex-col gap-2">
              <p>
                Số người lớn: {guestSize} x {formattedPrice(price * guestSize)}
              </p>
              <p>
                Số trẻ em: {guestChild}x{" "}
                {formattedPrice(priceChil * guestChild)}
              </p>
              <p>
                Tổng tiền:{" "}
                {formattedPrice(price * guestSize + priceChil * guestChild)}
              </p>
            </div>
          </div>
          <div className="col-2">
            <p className="mb-4">Thanh toán lần 1</p>
            {pay1Success ? (
              <h5 className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
                Đã thanh toán
              </h5>
            ) : (
              <h5>Đang thanh toán</h5>
            )}
          </div>
          <div className="col-2">
            <p className="mb-4">Thanh toán lần 2</p>
            {pay2Success ? (
              <h5 className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
                Đã thanh toán
              </h5>
            ) : (
              <h5 className="text-sm p-4 mb-4">Đang thanh toán</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
