import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Foot from "../images/Foot.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="foot">
          <div className="foot-text">
            <p>Skincare Sysytem</p>
            <h1>Let your skin’s health speak for itself!</h1>
            <p className="skin">
              Taking care of you is a lifestyle. Our all green products are safe
              for you and the environment. You are sure to enjoy your skincare
              journey with our products.
            </p>
            <br />
            <Link to="/x">
              <button>Shop</button>
            </Link>
          </div>
          <img src={Foot} alt="Main banner" />
        </div>
        <br />
        <br />
        <p className="foot-bot">A product of Skincare system CC. 2024</p>
      </footer>
    </div>
  );
}
