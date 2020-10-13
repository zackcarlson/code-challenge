import React from "react";
import "./CurrentPalette.css";
import CartList from "../CartList/CartList.tsx";

const CurrentPalette = () => {
  return (
    <div className="current-palette">
      <h3>Your current color cart palette</h3>
      <CartList />
    </div>
  );
};

export default CurrentPalette;
