import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartStore } from "../../state/context/cartContext";
import cartIcon from "../../assets/icons/CartIcon.svg";
import logo from "../../assets/icons/NewEngen-Logo.svg";

const Nav = () => {
  const cart = useCartStore();
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/" className="logo-link">
            <img src={logo} alt="New Engen Logo" className="logo-icon" />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
            <span className="cart-amount">
              {cart && cart.length > 0 && cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
