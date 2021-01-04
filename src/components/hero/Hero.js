import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { gadgetCat, bannerData } from "../../constants/heroData";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__featuredLinks'>
        <ul>
          <li>Featured Links</li>
          {gadgetCat.map((item) => (
            <Link key={item.id} to={item.url}>
              <li>
                <img src={item.img} alt='' className='gadget' /> {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='hero__slider'>
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval={1000}
          disableButtonsControls>
          {bannerData.map((item) => (
            <div key={item.id} className='hero__slide'>
              <img src={item.img} alt='' className='sliderimg' />
              <div className={`hero__slideContent ${item.impClass}`}>
                <h1 className={item.dangerColor && item.dangerColor}>
                  {item.title}
                </h1>
                <h2 className={item.dangerColor && item.dangerColor}>
                  {item.offerTitle}
                </h2>
                <p className={item.dangerColor && item.dangerColor}>
                  {item.text}
                </p>
                <Link to={item.url}>
                  <button className='btn-slide'>Shop now</button>
                </Link>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Hero;
