import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleries from "./galleryImages";

const MasonryImagesGallery2 = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 5}}>
      <Masonry gutter="1rem">
        {galleries.map((item, index) => (
          <div className="relative opacity-70">
            <img
              className="masonry__img rounded-lg w-full block"
              src={item.img}
              key={index}
              alt=""
            />
            <h4 className="absolute bottom-0 text-white left-3 p-2">{item.title}</h4>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery2;
