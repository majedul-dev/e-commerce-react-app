import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Topbar.css";

const Topbar = () => {
  const [openLang, setOpenLang] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  return (
    <div className='topbar'>
      <div className='container'>
        <div className='topbar__content'>
          <div className='topbar__left'>
            <div className='topbar__lang'>
              <button
                className='topbar__langBtn'
                onClick={() => setOpenLang(!openLang)}>
                {" "}
                <i className='fas fa-globe-americas'></i> English{" "}
                <i class='fas fa-chevron-down'></i>
              </button>
              <ul className={openLang ? "active" : ""}>
                <li>English</li>
                <li>Bangla</li>
              </ul>
            </div>
            <div className='topbar__currency'>
              <button
                className='topbar__currencyBtn'
                onClick={() => setOpenCurrency(!openCurrency)}>
                $ USD <i class='fas fa-chevron-down'></i>{" "}
              </button>
              <ul className={openCurrency ? "active" : ""}>
                <li>USD</li>
                <li>BDT</li>
                <li>EUR</li>
                <li>NIR</li>
                <li>NGN</li>
              </ul>
            </div>
          </div>
          <div className='topbar__right'>
            <Link to='/'>Sign in</Link>
            <span>|</span>
            <Link to='/'>Join</Link>
            <Link to='/'>
              <button className='btn'>Sell</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
