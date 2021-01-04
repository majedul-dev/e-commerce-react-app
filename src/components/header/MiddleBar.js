import React, { useState } from "react";
import "./styles/MiddleBar.css";
import logo from "../../images/logo.png";

const MiddleBar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div className='middlebar'>
      <div className='container'>
        <div className='middlebar__content'>
          <img className='middlebar__logo' src={logo} alt='logo' />
          <div className='middlebar__searchbar'>
            <div className='searchbar__category'>
              <button
                className='searchbar__categoryBtn'
                onClick={() => setOpenCategory(!openCategory)}>
                All Categories <i className='fas fa-chevron-down'></i>
              </button>
              <ul className={openCategory ? "active" : ""}>
                <li>All Categories</li>
                <li>Electronics</li>
                <li>Fashion & Beauty</li>
                <li>Camera & Photos</li>
                <li>Smart Phone & Tablets</li>
                <li>Sport & Outdoor</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
            <input
              type='text'
              className='searchInput'
              placeholder='Search For Product'
            />
            <button className='searchBtn'>
              <i class='fas fa-search'></i>
            </button>
          </div>
          <div className='middlebar__actions'>
            <div className='cart'>
              <i class='fas fa-cart-plus'></i>
            </div>
            <div className='wish'>
              <i class='far fa-heart'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
