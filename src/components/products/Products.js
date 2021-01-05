import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { featuredProducts } from "../../constants/products";

import banner4 from "../../images/banner-4.jpg";
import banner5 from "../../images/banner5.jpg";

const Products = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  return (
    <section className='products'>
      <div className='products__featured'>
        <div className='products__featured__header'>
          <h1>Featured</h1>
        </div>
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlayInterval={2000}
          className='products__featured__content'>
          {featuredProducts.map((product) => (
            <div className='card'>
              <div className='card-body'>
                <div className='product-img'>
                  <img src={product.img} alt='' />
                </div>
                <div className='product-details'>
                  <div className='product-info'>
                    <p>{product.title}</p>
                    <div className='price'>$ {product.price}</div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='actions'>
                    <button>
                      <i class='fas fa-heart'></i>
                    </button>
                    <button>
                      <i class='fas fa-shopping-basket'></i>
                    </button>
                    <button>
                      <i class='fas fa-compress-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
      <div className='products__featuredBanner'>
        <div className='products__featuredBanner__item'>
          <Link to='/'>
            <img src={banner4} alt='featured' />
          </Link>
        </div>
        <div className='products__featuredBanner__item'>
          <Link to='/'>
            <img src={banner5} alt='featured' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
