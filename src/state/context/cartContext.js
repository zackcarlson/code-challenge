import makeStore from "../store";
import { TOGGLE_SWATCH, CLEAR_CART } from "../constants";

const initalState = JSON.parse(window.localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SWATCH: {
      const { swatch } = action;
      const swatchExists = state.includes(swatch);
      let cart = [];

      if (swatchExists) {
        cart = state.filter((hex) => hex !== swatch);
      } else {
        cart = [...state, swatch];
      }

      window.localStorage.setItem("cart", JSON.stringify(cart));

      return cart;
    }
    case CLEAR_CART: {
      window.localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }
    default:
      return state;
  }
};

const [CartProvider, useCartStore, useCartDispatch] = makeStore(
  reducer,
  initalState
);

export { CartProvider, useCartStore, useCartDispatch };
