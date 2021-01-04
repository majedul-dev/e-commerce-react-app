import React from "react";
import "./styles/Footer.css";
import footerLogo from "../../images/footer-logo.png";
import SocialLinks from "../../constants/sociallinks";
import img1 from "../../images/4-min.jpg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__info'>
            <img src={footerLogo} alt='' />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
            </p>
            <SocialLinks />
          </div>
          <div className='footer__links'>
            <h3>FOOTER LINKS</h3>
            <ul>
              <li>
                <i className='fas fa-angle-double-right'></i>
                <a href='!#'>Home</a>
              </li>
              <li>
                <i className='fas fa-angle-double-right'></i>
                <a href='!#'>Privacy & Policy</a>
              </li>
              <li>
                <i className='fas fa-angle-double-right'></i>
                <a href='!#'>Terms & Condition</a>
              </li>
              <li>
                <i className='fas fa-angle-double-right'></i>
                <a href='https://majedulislam.co'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='footer__recentPost'>
            <h3>RECENT POST</h3>
            <div>
              <img src={img1} alt='img one' />
              <div>
                <a href='!#'>How to design effective arts?</a>
                <small>Jan 03 - 2019</small>
              </div>
            </div>
            <div>
              <img src={img1} alt='img one' />
              <div>
                <a href='!#'>How to design effective arts?</a>
                <small>Jan 03 - 2019</small>
              </div>
            </div>
            <div>
              <img src={img1} alt='img one' />
              <div>
                <a href='!#'>How to design effective arts?</a>
                <small>Jan 03 - 2019</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <p>COPYRIGHT © 2019. All Rights Reserved By GeniusOcean.com</p>
      </div>
    </footer>
  );
};

export default Footer;
