import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Cart />   */}
      {/* <Checkout /> */}

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Cart" element={<Cart/>}></Route>
          <Route exact path="/Checkout" element={<Checkout/>}></Route>
          <Route exact path="/*" element={<ErrorPage/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
