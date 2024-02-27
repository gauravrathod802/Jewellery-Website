import Slider from "react-slick";
import './RingCategory.css';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RingCategories = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    console.log("Going to previous slide");
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    console.log("Going to next slide");
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
            <button className="custom-btn prev-btn" onClick={goToPrev}>{'<'}</button>

      <Slider ref={sliderRef} {...settings}>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_rings_c356f6b3-6547-4e39-9b08-dfdf5ecfc2b0.jpg?v=1705748801" alt="" />        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/Nose_pin_250_x_250.jpg?v=1705748935" alt="" />        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/Personaloised_250_x_250-min.png?v=1705748978" alt="" />        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_br-min.png?v=1705748460" alt="" />        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1705748570" alt="" />
        </div>

        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_necklaces_pend_copy.jpg?v=1705748770" alt="" />
        </div>

      </Slider>
      <button className="custom-btn next-btn" onClick={goToNext}>{'>'}</button>

    </div>
    )
}

export default RingCategories