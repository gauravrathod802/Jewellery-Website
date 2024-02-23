// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   { url: "https://www.giva.co/cdn/shop/files/In_Vogue_Hero_Website-min.jpg?v=1708421837&width=1780" },
//   { url: "https://www.giva.co/cdn/shop/files/Bestseller_Hero_website-min_1.jpg?v=1708437975&width=3840%22" },
//   { url: "https://www.giva.co/cdn/shop/files/gold_hero_banner_-web-min.jpg?v=1708421757&width=375%20375w,%20" },
//   { url: "https://www.giva.co/cdn/shop/files/hero_banner_web_2_-min_1.jpg?v=1702014551&width=3840%22" },
// ];

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image.url} alt={`Slide ${index}`} style={{ width: '100%' }} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider;




import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css';

const images = [
  { url: "https://www.giva.co/cdn/shop/files/In_Vogue_Hero_Website-min.jpg?v=1708421837&width=1780" },
  { url: "https://www.giva.co/cdn/shop/files/Bestseller_Hero_website-min_1.jpg?v=1708437975&width=3840%22" },
  { url: "https://www.giva.co/cdn/shop/files/gold_hero_banner_-web-min.jpg?v=1708421757&width=375%20375w,%20" },
  { url: "https://www.giva.co/cdn/shop/files/hero_banner_web_2_-min_1.jpg?v=1702014551&width=3840%22" },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
