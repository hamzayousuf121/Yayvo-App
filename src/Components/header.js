import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import yayvologo from "../images/yayvo_logo.png";
import { Button } from "reactstrap";
function Header() {
  return (
    <div className="container ">
      <div className="header ">
        <span>
          <img src={yayvologo} alt="yayvo.com" />
        </span>
        <input
          className="input-text UI-SEARCH"
          type="text"
          placeholder="Search for products, brands and more..."
          autoComplete="off"
          maxLength="128"
        />
        <Button className="search-btn" type="submit" color="danger">
          Search
        </Button>{" "}
        <i className="fa fa-shopping-cart cart"></i>
      </div>
      <button className="category-btn"> All Categories</button>
      <ul className="d-inline get-touch">
        <li className="d-inline ">
          Get in Touch ! Click here &nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li className="d-inline">Login |&nbsp;</li>
        <li className="d-inline">Register</li>
      </ul>
    </div>
  );
}
export default Header;
