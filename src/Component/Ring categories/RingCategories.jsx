import Slider from "react-slick";
import './RingCategory.css';
import { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RingCategories = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(7); // Default to 7 slides for larger screens

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 7
  };

  const goToPrev = () => {
    console.log("Going to previous slide");
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    console.log("Going to next slide");
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && window.innerWidth > 576) {
        setSlidesToShow(5);
      } else if (window.innerWidth <= 576) { 
        setSlidesToShow(4);
      } else { 
        setSlidesToShow(7);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="slider-container">
            <button className="custom-btn prev-btn" onClick={goToPrev}>{'<'}</button>

      <Slider ref={sliderRef} {...settings}>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg?v=1705749057" alt="" />
          <div className="category">Toe Ring</div>
          </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_rings_c356f6b3-6547-4e39-9b08-dfdf5ecfc2b0.jpg?v=1705748801" alt="" />
          <div className="category">Pink Ring</div>
          </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/Nose_pin_250_x_250.jpg?v=1705748935" alt="" />
          <div className="category">Nose Pin</div>
        </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/Personaloised_250_x_250-min.png?v=1705748978" alt="" />
          <div className="category">Personalised</div>
          </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_br-min.png?v=1705748460" alt="" />
          <div className="category">Bracelet</div>
          </div>
        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1705748570" alt="" />
          <div className="category">Earrings</div>
        </div>

        <div className="ring">
          <img src="https://www.giva.co/cdn/shop/collections/pink_necklaces_pend_copy.jpg?v=1705748770" alt="" />
          <div className="category">Necklace</div>
        </div>

      </Slider>
      <button className="custom-btn next-btn" onClick={goToNext}>{'>'}</button>

    </div>
    )
}

export default RingCategories