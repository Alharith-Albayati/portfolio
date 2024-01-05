import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest Fashion Sale",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Modern Accessories",
      mainTitle: "Trending Sunglasses",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "New Fashion Summer Sale",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
              img={item.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
