import React from "react";
import PropTypes from "prop-types";
import "./Swatch.css";
import { useCartDispatch } from "../../state/context/cartContext";
import TOGGLE_SWATCH from "../../state/constants";

type SwatchProps = {
  hex: string,
  isSelected: boolean,
};

const Swatch = ({ hex, isSelected }: SwatchProps) => {
  const dispatch = useCartDispatch();
  const hexCode = `#${hex}`;

  const generateBorderStyle = () => {
    let borderColor = hexCode;

    if (isSelected) {
      if (hex === "000000") borderColor = "rgb(56 56 56)";
      else borderColor = "rgba(0, 0, 0, .5)";
    }

    return borderColor;
  };
  const styles = {
    backgroundColor: hexCode,
    border: `4px solid ${generateBorderStyle()}`,
  };

  const handleToggle = () => {
    dispatch({ type: TOGGLE_SWATCH, swatch: hex });
  };

  return (
    <option style={styles} onClick={handleToggle} className="swatch-item">
      {hex}
    </option>
  );
};

Swatch.propTypes = {
  hex: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Swatch;
