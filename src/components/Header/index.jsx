import React from "react";
import TopMenu from "../TopMenu";
import "./_header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3 col-lg-2">
              <div className="header__logo">
                <font>eStore</font>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="input-group">
                <div className="input-group-prepend">
                  <select className="form-control btn btn-success dropdown-toggle">
                    <option>All</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                  </select>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <button className="btn btn-success">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <a href="#">Sign-In </a>

                  <a href="#">Sign-Up</a>
                </div>
                <ul className="header__right__widget">
                  <li>
                    <i className="fa fa-heart"></i>
                  </li>
                  <li>
                    <i className="fa fa-shopping-cart"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TopMenu />
    </>
  );
};

export default Header;
