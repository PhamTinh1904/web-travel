import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/tour-images/weather.png'
import guideImg from '../assets/tour-images/guide.png'
import customizationImg from '../assets/tour-images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imgUrl: customizationImg,
        title: 'Customziation',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((service, index)=>(
            <Col lg='3' className='' key={index}>{<ServiceCard item={service}/>}</Col>
        ))
    }
    </>
  )
}

export default ServiceList