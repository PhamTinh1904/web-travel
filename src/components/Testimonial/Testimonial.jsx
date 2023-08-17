import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/tour-images/ava-1.jpg";
import ava02 from "../../assets/tour-images/ava-2.jpg";
import ava03 from "../../assets/tour-images/ava-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true, 
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-3 px-4">
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint
          possimus. Assumenda incidunt enim repellendus voluptate excepturi
          dolorum adipisci! Mollitia facilis quam culpa id rerum voluptates
          iusto nulla. Explicabo, natus!
        </p>
        <div className="flex items-center">
          <img className=" w-1/4 mr-4" src={ava01} />
          <div>
            <h6 className="mb-0 mt-3">Johb Doe</h6>
            <p className=" text-sm">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-4">
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint
          possimus. Assumenda incidunt enim repellendus voluptate excepturi
          dolorum adipisci! Mollitia facilis quam culpa id rerum voluptates
          iusto nulla. Explicabo, natus!
        </p>
        <div className="flex items-center">
          <img className=" w-1/4 mr-4" src={ava02} />
          <div>
            <h6 className="mb-0 mt-3">Johb Doe</h6>
            <p className=" text-sm">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-4">
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint
          possimus. Assumenda incidunt enim repellendus voluptate excepturi
          dolorum adipisci! Mollitia facilis quam culpa id rerum voluptates
          iusto nulla. Explicabo, natus!
        </p>
        <div className="flex items-center">
          <img className=" w-1/4 mr-4" src={ava03} />
          <div>
            <h6 className="mb-0 mt-3">Johb Doe</h6>
            <p className=" text-sm">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-4">
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint
          possimus. Assumenda incidunt enim repellendus voluptate excepturi
          dolorum adipisci! Mollitia facilis quam culpa id rerum voluptates
          iusto nulla. Explicabo, natus!
        </p>
        <div className="flex items-center">
          <img className=" w-1/4 mr-4" src={ava03} />
          <div>
            <h6 className="mb-0 mt-3">Johb Doe</h6>
            <p className=" text-sm">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
