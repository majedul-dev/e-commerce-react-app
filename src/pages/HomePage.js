import React from "react";
import FeaturedBanner from "../components/featured-banner/FeaturedBanner";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Hero />
        <FeaturedBanner />
        <Products />
      </div>
    </section>
  );
};

export default HomePage;
