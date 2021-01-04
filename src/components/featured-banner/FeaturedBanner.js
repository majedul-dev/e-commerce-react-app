import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { featuredBanner, infoData } from "../../constants/featuredBanner";

const FeaturedBanner = () => {
  return (
    <>
      <section className='featuredBanner'>
        {featuredBanner.map((item) => (
          <div key={item.id} className='featuredBanner__item'>
            <Link to={item.url}>
              <img src={item.img} alt='featured' />
            </Link>
          </div>
        ))}
      </section>
      <section className='infoAria'>
        {infoData.map((item) => (
          <Link to={item.url} key={item.id} className='infoAria__content'>
            <img src={item.img} alt='' />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default FeaturedBanner;
