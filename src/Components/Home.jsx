import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import App from "../App";
import Cart from "./Cart";

import mainimage from "../images/Frame 23.png";
import Pro1 from "../images/Pro1.png";
import Pro2 from "../images/Pro2.png";
import Pro3 from "../images/Pro3.png";
import Pro4 from "../images/Pro4.png";
import "../Components/Footer.css";
import "./Home.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="main">
        <div className="main-text">
          <p>Skincare Sysytem</p>
          <h1>Healthy products that age you backwards</h1>
          <p className="skin">
            At skincare system we do not just make promises. There’s a very long
            list of satisfied customers over the years and we are glad to share
            the goodness of natural and healthy skin with you
          </p>
          <br />
          {/* <button> */}
          <Link to="/Cart">
            <button>Shop</button>
          </Link>
          {/* </button> */}
        </div>
        <img src={mainimage} alt="Main banner" />
      </div>
      <br />
      <br />
      <div className="feat-prod">
        <h2 className="feat">Featured products</h2>
        <p className="our">Our best sellers for this week!</p>
        <br />
        <br />
        <div className="products">
          <div className="prods">
            <img className="prod-img" src={Pro1} alt="" />
            <div className="prod-deta">
              <p className="price">₦12,000 - ₦28,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">Oloture lip palm oil</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <span>25% off</span>
            <img className="prod-img" src={Pro2} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦12,000 - ₦28,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">Oloture lip palm oil</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <img className="prod-img" src={Pro3} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦12,000 - ₦28,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">Oloture lip palm oil</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <span>25% off</span>
            <img className="prod-img" src={Pro4} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦12,000 - ₦28,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">Oloture lip palm oil</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img id="svg" src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <div className="products">
          <div className="prods">
            <img className="prod-img" src={Pro1} alt="" />
            <div className="prod-deta">
              <p className="price">₦127,000 - ₦200,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">Night care set</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <span>25% off</span>
            <img className="prod-img" src={Pro2} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦1,500 - ₦6,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">lemon eye creme</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <img className="prod-img" src={Pro3} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦10,000 - ₦40,000</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">green hair mask</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
          <div className="prods">
            <span>25% off</span>
            <img className="prod-img" src={Pro4} alt="" />
            {/* <p className="price">₦12,000 - ₦28,000</p> */}
            <div className="prod-deta">
              <p className="price">₦11,500 - ₦29,500</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <p className="prod-name">dark knuckle creme</p>
            <Link to="/Cart">
              <button className="add">
                {/* <img id="svg" src={Bag} alt="" /> */}
                <i class="fa-solid fa-bag-shopping"></i>
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="two-shops">
          <div className="shop1">
            <h2>New Arrival - hand creme</h2>
            <Link to="/Cart">
              <button>Shop</button>
            </Link>
          </div>
          <div className="shop2">
            <h2>25% off hair & makeup!</h2>
            <p>
              We’re celebrating our 4th year in business! All products under
              hair and makeup categories are on sales at 25% off!
            </p>
            <Link to="/Cart">
              <button>Shop</button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
