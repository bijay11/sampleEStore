import Reat from "react";
import "./_sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar_category">
      <div className="section-title">
        <h4>Categories</h4>
      </div>
      <div className="category_accordion">
        <div className="accordion">
          <div className="card">
            <div className="card-heading">
              <a href="">Women</a>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <a href="#">Coats</a>
                </li>
                <li>
                  <a href="#">Jackets</a>
                </li>
                <li>
                  <a href="#">Dresses</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
