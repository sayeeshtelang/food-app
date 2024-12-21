import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>Food App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li className="cart-icon">
          <Link to="/cart">Cart</Link>
          <span className="cart-count">{cartItems.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
