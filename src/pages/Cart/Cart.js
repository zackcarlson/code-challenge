import React from "react";
import "./Cart.css";
import { PaletteProvider } from "../../state/context/paletteContext";

const Cart = () => (
  <div className="cart-page">
    <PaletteProvider>
      <div>CART PAGE HERE</div>
    </PaletteProvider>
  </div>
);

export default Cart;
