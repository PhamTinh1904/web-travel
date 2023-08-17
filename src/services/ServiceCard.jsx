import React from 'react'
import './service-card.scss'

const ServiceCard = ({item}) => {

    const {imgUrl, title, desc} = item
  return (
    <div className='service__item pt-4'>
        <div className='service__img flex justify-center items-center rounded-full p-2 mb-4'>
            <img className=' w-full' src={imgUrl} alt="" />
        </div>
        <h5 className='service__title text-lg font-medium'>{title}</h5>
        <p className='service__desc text-sm'>{desc}</p>
    </div>
  )
}

export default ServiceCard