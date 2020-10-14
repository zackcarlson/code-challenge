/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import { generateSwatchBaseStyles } from "../../utlis";
import { CartSwatchProps, SwatchBaseStyle } from "../../types";
import "./CartSwatch.css";
import TrashIcon from "../TrashIcon/TrashIcon";

const CartSwatch = ({ hex, handleClick }: CartSwatchProps) => {
  const styles: SwatchBaseStyle = generateSwatchBaseStyles(hex);
  const hexCode = `#${hex}`;
  return (
    <div style={styles} className="swatch-item cart-swatch-item">
      <div onClick={handleClick} className="trash-icon">
        <TrashIcon />
      </div>
      <p>{hexCode}</p>
    </div>
  );
};

CartSwatch.propTypes = {
  hex: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CartSwatch;
