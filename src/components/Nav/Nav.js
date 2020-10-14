import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartStore } from "../../state/context/cartContext";
import cartIcon from "../../assets/icons/CartIcon.svg";
import logo from "../../assets/icons/NewEngen-Logo.svg";

const Nav = () => {
  const cart = useCartStore();

  const generateCartAmountStyle = () => {
    let cartAmountStyle = "";
    const cartLength = cart.length;

    if (cartLength === 10) cartAmountStyle = "ten";
    else if (cartLength < 10) cartAmountStyle = "less-than-ten";
    else cartAmountStyle = "greater-than-ten";
    return cartAmountStyle;
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-item logo-li-item">
          <Link to="/" className="logo-link">
            <img src={logo} alt="New Engen Logo" className="logo-icon" />
          </Link>
        </li>
        <li className="nav-item cart-li-item">
          <Link to="/cart" className="cart-link">
            <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
            {cart && cart.length > 0 && (
              <span className={`cart-amount ${generateCartAmountStyle()}`}>
                {cart.length > 10 ? "10+" : cart.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
