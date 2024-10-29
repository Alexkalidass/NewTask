import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Dashboard")}
          className={menu === "Dashboard" ? "active" : ""}
        >
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          onClick={() => setMenu("product")}
          className={menu === "product" ? "active" : ""}
        >
          <Link to="/Products">PRODUCTS</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
