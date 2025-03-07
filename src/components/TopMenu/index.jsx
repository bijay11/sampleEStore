import React from "react";
import "./_topmenu.scss";

const menu = ["Home", "Women", "Men", "Kids", "Best Seller"];

const TopMenu = () => {
  return (
    <>
      <header className="menuHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-lg-12">
              <nav className="menu">
                <ul>
                  {menu.map((item, i) => (
                    <li key={i}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopMenu;
