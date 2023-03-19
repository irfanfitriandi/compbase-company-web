import React from "react";
import { Carousel } from "antd";
import soon from "assets/soon.jpg";

const CarouselProduct: React.FC = () => (
  <div
    style={{
      display: "block",
      maxWidth: "100vw",
    }}
  >
    <Carousel autoplay>
      {[...Array(5).keys()].map((idx) => (
        <div key={idx}>
          <img className="max-w-xl w-full mx-auto" src={soon} alt="soon" />
          <h3 className="text-center font-semibold tracking-tight text-2xl text-[#FF1F57] pb-6">
            --Coming Soon--
          </h3>
          <div className="w-36 h-7 bg-gray-300 mx-auto rounded-2xl" />
        </div>
      ))}
    </Carousel>
  </div>
);

export default CarouselProduct;
