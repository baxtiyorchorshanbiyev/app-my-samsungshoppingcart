import React from 'react';
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main>
            <Slider {...settings}>
          <div className="banner-content">
            <h1>QuickDrive</h1>
            <p>Безупречное качество. В 2 раза быстрее*</p>
          </div>
          <div className="banner-content">
          <h1>QuickDrive</h1>
            <p>Безупречное качество. В 2 раза быстрее*</p>
          </div>
          <div className="banner-content">
          <h1>QuickDrive</h1>
          <p>Безупречное качество. В 2 раза быстрее*</p>
          </div>
          <di  className="banner-content">
          <h1>QuickDrive</h1>
          <p>Безупречное качество. В 2 раза быстрее*</p>
          </di>
        
        </Slider>
    </main>
  );
};

export default Banner;