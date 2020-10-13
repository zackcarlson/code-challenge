import React from "react";
import PropTypes from "prop-types";
import Swatch from "../Swatch/Swatch";
import { useCartStore, useCartDispatch } from "../../state/context/cartContext";
import { TOGGLE_SWATCH } from "../../state/constants";
import "./SwatchList.css";
import { SwatchListProps } from "../../types";

const SwatchList = ({ swatches }: SwatchListProps) => {
  const cart = new Set(useCartStore());
  const dispatch = useCartDispatch();

  const handleToggle = (hexCode: string): void => {
    dispatch({ type: TOGGLE_SWATCH, swatch: hexCode });
  };

  return (
    <ul className="swatch-list">
      {swatches &&
        swatches.length > 0 &&
        swatches.map(({ hex }) => {
          let isSelected: boolean = false;

          if (cart.has(hex)) isSelected = true;

          return (
            <Swatch
              key={hex}
              hex={hex}
              isSelected={isSelected}
              handleClick={() => handleToggle(hex)}
            />
          );
        })}
    </ul>
  );
};

SwatchList.propTypes = {
  swatches: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string,
      __typename: PropTypes.string,
    })
  ).isRequired,
};

export default SwatchList;
