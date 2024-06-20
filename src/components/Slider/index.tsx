import React from "react";
import Slider from "react-slick";
import lodash from "lodash";

type Props = {};

const LogoCarousel = (props: Props) => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        {lodash.range(1, 12).map((val) => (
          <div className="w-[240px]">
            <img
              className="w-full h-[200px]"
              loading="lazy"
              alt=""
              src={`/assets/stickers/${val}.png`}
            />
          </div>
        ))}
      </Slider>
      <div className="container text-center flex justify-center items-center moreSticker">
        <a href="/" className="flex items-center">
          <span>See more Stickers</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </React.Fragment>
  );
};

export default LogoCarousel;
