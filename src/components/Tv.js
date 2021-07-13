import React from 'react';
import Slider from "react-slick";
const Tv = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="tv">
          <Slider {...settings}>
          <div className="tv-content">
            <h1>Телевизор, когда включен, картина когда выключен</h1>
          </div>
          <div className="tv-content">
          <h1>Телевизор, когда включен, картина когда выключен</h1>
          </div>
          <div className="tv-content">
          <h1>Телевизор, когда включен, картина когда выключен</h1>
          </div>
          <di  className="tv-content">
          <h1>Телевизор, когда включен, картина когда выключен</h1>
          </di>
        
        </Slider>
    </section>
  );
};

export default Tv;