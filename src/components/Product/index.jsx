import React from "react";
import "./_product.scss";

const products = [
  require("../../assets/img/shop/shop-1.jpg"),
  require("../../assets/img/shop/shop-2.jpg"),
  require("../../assets/img/shop/shop-3.jpg"),
  require("../../assets/img/shop/shop-4.jpg"),
  require("../../assets/img/shop/shop-6.jpg"),
];

const Product = () => {
  return (
    <div className="row">
      {products.map((item, index) => (
        <div className="col-lg-3 col-md-6">
          <div className="product__item">
            <div className="product__item__pic">
              <img className="product__item__pic" src={item} alt="" />
              <ul className="product__hover">
                <li>
                  <a href={item}>
                    <span className="fa fa-arrows-alt" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <a href="">Furry Hooded</a>
              </h6>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="produt_price">$590.00</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
