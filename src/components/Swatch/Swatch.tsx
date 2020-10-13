/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import "./Swatch.css";
import { generateSwatchBaseStyles } from "../../utlis";
import { SwatchProps, SwatchBaseStyle } from "../../types";

const Swatch = ({ hex, isSelected, handleClick }: SwatchProps) => {
  const styles: SwatchBaseStyle = generateSwatchBaseStyles(hex, isSelected);
  return (
    <div style={styles} className="swatch-item" onClick={handleClick}>
      {hex}
    </div>
  );
};

Swatch.propTypes = {
  hex: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func,
};

Swatch.defaultProps = {
  handleClick: () => {},
  isSelected: false,
};

export default Swatch;
