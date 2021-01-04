import React from "react";
import FeaturedBanner from "../components/featured-banner/FeaturedBanner";
import Hero from "../components/hero/Hero";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Hero />
        <FeaturedBanner />
      </div>
    </section>
  );
};

export default HomePage;
