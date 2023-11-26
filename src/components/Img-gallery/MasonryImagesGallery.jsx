import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleries from "./galleryImages";
import { Link } from "react-router-dom";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 3 }}>
      <Masonry gutter="1rem">
        {galleries.map((item, index) => (
          <div className="relative opacity-70">
            <Link to={`/tours/${item.url}`} className=" text-lg">
            <img
              className="masonry__img rounded-lg w-full block"
              src={item.img}
              key={index}
              alt=""
            />
            <h4 className="absolute bottom-0 text-white left-3 p-2">{item.title}</h4>
          </Link>
           
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
