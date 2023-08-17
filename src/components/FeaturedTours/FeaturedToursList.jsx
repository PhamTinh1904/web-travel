import React, { useEffect, useState } from 'react'
import TourCard from '../../shared/TourCard/TourCard'

import {Col} from 'reactstrap'
import axios from '../../axios'

const FeaturedToursList = () => {
  const [tours, setTours] = useState([]);
  useEffect(()=>{
    axios
    .get(`/tours`)
    .then((res) => {
      setTours(res.result.data);
    })
  }, [])

  return (
    <>
    {tours.map((tour)=>(
        <Col lg='3' md='6' key={tour._id} className='mb-4'><TourCard tour={tour}/></Col>
    ))}
    </>
  )
}

export default FeaturedToursList