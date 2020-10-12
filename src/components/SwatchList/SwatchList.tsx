import React from "react";
import PropTypes from "prop-types";
import Swatch from "../Swatch/Swatch";
import { useCartStore } from "../../state/context/cartContext";
import "./SwatchList.css";

interface SwatchInfo {
  hex: string;
  __typename: string;
}

type SwatchListProps = {
  swatches: SwatchInfo[],
};

const SwatchList = ({ swatches }: SwatchListProps) => {
  const cart = new Set(useCartStore());

  return (
    <ul className="swatch-list">
      {swatches && swatches.length > 0 && swatches.map(({ hex }) => {
        let isSelected = false;

        if (cart.has(hex)) isSelected = true;

        return <Swatch key={hex} hex={hex} isSelected={isSelected} />;
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
