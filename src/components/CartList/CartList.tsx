import React from "react";
import { useCartStore, useCartDispatch } from "../../state/context/cartContext";
import "./CartList.css";
import DeletableSwatch from "../DeletableSwatch/DeletableSwatch";
import { TOGGLE_SWATCH } from "../../state/constants";

const CartList = () => {
  const cart = useCartStore();
  const dispatch = useCartDispatch();

  const handleDelete = (hexCode: string): void => {
    dispatch({ type: TOGGLE_SWATCH, swatch: hexCode });
  };

  return (
    <ul className="cart-list">
      {cart &&
        cart.length > 0 &&
        cart.map((hex: string) => (
          <DeletableSwatch
            key={hex}
            hex={hex}
            handleClick={() => handleDelete(hex)}
          />
        ))}
    </ul>
  );
};

export default CartList;
