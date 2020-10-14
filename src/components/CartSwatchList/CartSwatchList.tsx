import React from "react";
import { useCartStore, useCartDispatch } from "../../state/context/cartContext";
import "./CartSwatchList.css";
import CartSwatch from "../CartSwatch/CartSwatch";
import { TOGGLE_SWATCH } from "../../state/constants";

const CartSwatchList = () => {
  const cart = useCartStore();
  const dispatch = useCartDispatch();

  const handleDelete = (hexCode: string): void => {
    dispatch({ type: TOGGLE_SWATCH, swatch: hexCode });
  };

  return (
    <div className="current-palette">
      <h3>Your current color cart palette</h3>
      <div className="cart-list">
        {cart && cart.length > 0 ? (
          cart.map((hex: string) => (
            <CartSwatch
              key={hex}
              hex={hex}
              handleClick={() => handleDelete(hex)}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartSwatchList;
