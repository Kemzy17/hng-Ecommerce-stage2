// import React from "react";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../Components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <p className="header-text">
          Free deliveries on all orders within Nigeria
        </p>
        <nav>
          <Link style={{margin: '0px'}} to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link
              style={{
                fontWeight: "700",
                paddingBottom: "2px",
                borderBottom: "2px solid #111",
              }}
              to="/"
            >
              Home
            </Link>
            <Link to="/*">Shop</Link>
            <Link to="/*">Categories</Link>
            <Link to="/*">About</Link>
            <Link to="/*">Blog</Link>
            <Link to="/*">Contact</Link>
            {/* <Link to="/Cart">Cart</Link>
        <Link to="/Checkout">Checkout</Link> */}
          </div>
          <div className="nav-corner">
            <div className="search">
              <input type="search" placeholder="Search" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to="/Cart">
              <i
                style={{ fontSize: "20px" }}
                class="fa-solid fa-bag-shopping"
              ></i>
            </Link>
            <Link to="/*">
              <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
            </Link>
        <i
          class="fa-solid fa-align-center fa-flip-vertical nav-toggle"
          onClick={toggleMenu}
        ></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
