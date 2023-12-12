import React, {
  useRef,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Container, Form, ListGroup } from "reactstrap";
import { REACT_APP_BACKEND_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import TourCard from "../shared/TourCard/TourCard";
import TripCard from "../shared/TripCard/TripCard";
import RatingModal from "../components/Modal/RatingModal";
import { Rating } from "@mui/material";

import BasicModal from "../components/Modal/Modal";



const Trips = () => {

  const { user, dispatch } = useContext(AuthContext);
  const reviewMsgRef = useRef("");

  const [trips, setTrips] = useState([]);
  const [tours, setTours] = useState([]);
  const [apiCallFinished, setApiCallFinished] = useState(false);
  
 
 

 

  

  // useEffect(() => {
  //   setIsOpen(isOpen);
  // }, [isOpen]);

 
  
 

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
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
 
  

  return (
    <Container>
      <div className="">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
      {/* <RatingModal isOpen={isOpen} disabled={false} body={body} /> */}
      
    </Container>
  );
};

export default Trips;
