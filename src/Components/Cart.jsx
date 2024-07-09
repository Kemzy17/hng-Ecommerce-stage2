import React, { useState } from "react";
import "../Components/Cart.css";
import Pro1 from "../images/Pro1.png";
import Cart1 from "../images/Cart1.jpeg";
import Cart2 from "../images/Cart2.jpeg";
import Cart3 from "../images/Cart3.jpeg";
import Cart4 from "../images/Cart4.jpeg";
import Cart5 from "../images/Cart5.jpeg";
import delet from "../images/delete.svg";
import Footer from "./Footer";
import { BrowserRouter, Link } from "react-router-dom";

export default function Cart() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const Trash = () => {
    alert("Deleting...");
  };

  return (
    <div>
      <h1 className="table-head">Cart</h1>
      <div className="table">
        <div className="cart-table">
          <div className="row-1">
            <div className="check">
              <input type="checkbox" />
              <p style={{ fontSize: "12px", fontWeight: "500" }}>Product</p>
            </div>
            <p
              className="c1"
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Quantity
            </p>
            <p className="c2">Price</p>
          </div>
          <div className="row-2">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <img src={Cart1} alt="Pro" />
              <div>
                <h3>Vitamin C Serum</h3>
                <p className="size">Medium</p>
              </div>
            </div>
            <div className="c1">
              <div className="incre">
                <button onClick={decrement} disabled={count === 1}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
              <p>
                {" "}
                <p onClick={Trash} style={{cursor: 'pointer'}}>
                  <img src={delet} alt="delete" /> Delete
                </p>
              </p>
            </div>
            <div className="c2">
              <h2>₦18,000</h2>
            </div>
          </div>
          <div className="row-2">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <img src={Cart2} alt="Pro" />
              <div>
                <h3>Hair serum</h3>
                <p className="size">XXL</p>
              </div>
            </div>
            <div className="c1">
              <div className="incre">
                <button onClick={decrement} disabled={count === 1}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
              <p>
                {" "}
                <p onClick={Trash} style={{cursor: 'pointer'}}>
                  <img src={delet} alt="delete" /> Delete
                </p>
                {/* <img src={delet} alt="delete" /> Delete */}
              </p>
            </div>
            <div className="c2">
              <h2>₦18,000</h2>
            </div>
          </div>
          <div className="row-2">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <img src={Cart3} alt="Pro" />
              <div>
                <h3>Oloture skin care set</h3>
                <p className="size">Medium</p>
              </div>
            </div>
            <div className="c1">
              <div className="incre">
                <button onClick={decrement} disabled={count === 1}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
              <p>
                {" "}
                <p onClick={Trash} style={{cursor: 'pointer'}}>
                  <img src={delet} alt="delete" /> Delete
                </p>
                {/* <img src={delet} alt="delete" /> Delete */}
              </p>
            </div>
            <div className="c2">
              <h2>₦18,000</h2>
            </div>
          </div>
          <div className="row-2">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <img src={Cart4} alt="Pro" />
              <div>
                <h3>Skin toner</h3>
                <p className="size">Small</p>
              </div>
            </div>
            <div className="c1">
              <div className="incre">
                <button onClick={decrement} disabled={count === 1}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
              <p>
                {" "}
                <p onClick={Trash} style={{cursor: 'pointer'}}>
                  <img src={delet} alt="delete" /> Delete
                </p>
                {/* <img src={delet} alt="delete" /> Delete */}
              </p>
            </div>
            <div className="c2">
              <h2>₦18,000</h2>
            </div>
          </div>
          <div className="row-2">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <img src={Cart5} alt="Pro" />
              <div>
                <h3>Skin moisturizer</h3>
                <p className="size">Medium</p>
              </div>
            </div>
            <div className="c1">
              <div className="incre">
                <button onClick={decrement} disabled={count === 1}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
              <p>
                {" "}
                <p onClick={Trash} style={{cursor: 'pointer'}}>
                  <img src={delet} alt="delete" /> Delete
                </p>
                {/* <img src={delet} alt="delete" /> Delete */}
              </p>
            </div>
            <div className="c2">
              <h2>₦18,000</h2>
            </div>
          </div>
        </div>
        <div className="checkout-proc">
          <div className="sub">
            <p>Sub-total</p>
            <span>₦2,798,000</span>
          </div>
          <div className="sub">
            <p>Discount</p>
            <span style={{ color: "#00000020" }}>₦0.00</span>
          </div>
          <div className="sub">
            <p>Grand total</p>
            <span>₦2,800,000</span>
          </div>
          <h3 className="mode">Mode Of Payment</h3>
          <div
            style={{ borderTop: "1px solid rgb(225, 223, 223)" }}
            className="sub sub-sub"
          >
            <p>Bank Transfer</p>
            {/* <span>₦2,798,000</span> */}
            <i class="fa-regular fa-paper-plane"></i>
          </div>
          <div className="sub sub-sub">
            <p>Credit Card</p>
            {/* <span>₦0.00</span> */}
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div className="sub sub-sub">
            <p>Apple Pay</p>
            {/* <span>₦2,800,000</span> */}
            <i class="fa-brands fa-cc-apple-pay"></i>
          </div>
          <Link to="/Checkout">
            <button>Proceed to checkout</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
