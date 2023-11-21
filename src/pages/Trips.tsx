import React, { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import { REACT_APP_BACKEND_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import TourCard from "../shared/TourCard/TourCard";
import TripCard from "../shared/TripCard/TripCard";

const Trips = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);
  const [tours, setTours] = useState([]);
  const [apiCallFinished, setApiCallFinished] = useState(false);


  const requestOptions = {
    method: "get",
    url: `${REACT_APP_BACKEND_URL}/tours/trips`,
    headers: {
      "Content-Type": "application/json",
      userEmail: user.email, // Đặt thông tin vào header
    },
  };

  useEffect(() => {
    axios(requestOptions)
      .then((response) => {
        setTrips(response.data.result.data); // Dữ liệu trả về từ API
        console.log(trips)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 

 

  return (
    <Container>
      <div className="">
      {trips.map((trip, index)=>(
        <TripCard key={index} trip={trip}/>
      ))}
      </div>
      
    </Container>
  );
};

export default Trips;
