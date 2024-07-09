import React from 'react'
import "./Checkout.css"
import Footer from './Footer'
import { BrowserRouter, Link } from "react-router-dom";

import Navbar from "./Navbar";


export default function Checkout() {
    const showAlert = () => {
        alert('Payment Processing...')
    }
  return (
    <div>
        {/* <Navbar /> */}
        <h1 className='head-text'>Checkout</h1>
        <form action="">
            <div className="form-1">
                <h3 className='bill'> <i class="fa-regular fa-map"></i> Billing Address</h3>
                <div className="f1">
                    <input className='' type="number" name="" id="" placeholder='Phone Number'/>
                    <input className='' type="text" name="" id="" placeholder='Country'/>
                    <input className='' type="text" name="" id="" placeholder='Home Address'/>
                    <input className='' type="text" name="" id="" placeholder='Postal Code'/>
                    <div className='f2'>
                        <input type="text" name="" id="" placeholder='City'/>
                        <input type="text" name="" id="" placeholder='Region'/>
                    </div>
                </div>
                    <div className="rem">
                        <h2 className="rem-head">Remember my information</h2>
                        <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Enter these details automatically for future transactions
                        </label>
                        
                    </div>
            </div>
            <div className="form-2">
            <h3 className='bill'> <i class="fa-regular fa-credit-card"></i> Credit Card Details</h3>
                <div className="f1">
                    <input className='' type="number" name="" id="" placeholder='Card Number'/>
                    <input className='' type="text" name="" id="" placeholder='Card Name'/>
                    <div className='f2'>
                        <input type="text" name="" id="" placeholder='Expiration Date'/>
                        <input type="text" name="" id="" placeholder='CVV'/>
                    </div>
                    <button style={{cursor: 'pointer'}} onClick={showAlert}>Make Payment</button>
                </div>
            </div>
        </form>
        <br /><br /><br /><br />
        <Footer />
    </div>
  )
}
