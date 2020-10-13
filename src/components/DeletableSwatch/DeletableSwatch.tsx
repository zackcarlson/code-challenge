import React from "react";
import PropTypes from "prop-types";
import { generateSwatchBaseStyles } from "../../utlis";
import { DeletableSwatchProps, SwatchBaseStyle } from "../../types";

const DeletableSwatch = ({ hex, handleClick }: DeletableSwatchProps) => {
  const styles: SwatchBaseStyle = generateSwatchBaseStyles(hex);
  return (
    <div style={styles} className="swatch-item__delete">
      {hex}
      <button type="button" onClick={handleClick}>
        Trash Can
      </button>
    </div>
  );
};

DeletableSwatch.propTypes = {
  hex: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DeletableSwatch;
