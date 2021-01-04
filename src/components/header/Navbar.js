import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__content'>
          <button className='navbar__categories'>
            <div>
              <i className='fas fa-bars'></i>Categories
            </div>
            <i className='fas fa-chevron-down'></i>
          </button>
          <span
            className='navbar__handburgar'
            onClick={() => setOpenNav(!openNav)}>
            <i className='fas fa-bars'></i>
          </span>
          <div className={`navbar__menu ${openNav ? "active" : ""}`}>
            <ul>
              <li>
                <a href='https://majedulislam.co/'>Blog</a>
              </li>
              <li>
                <a href='https://majedulislam.co/'>Faq</a>
              </li>
              <li>
                <a href='https://majedulislam.co/'>About</a>
              </li>
              <li>
                <a href='https://majedulislam.co/'>Contact</a>
              </li>
              <li>
                <a className='active' href='https://majedulislam.co/'>
                  TrackOrder
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
