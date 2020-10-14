import React from "react";
import PropTypes from "prop-types";
import Swatch from "../Swatch/Swatch";
import { SavedPaletteProps } from "../../types";
import "./SavedPalette.css";
import TrashIcon from "../TrashIcon/TrashIcon";

const SavedPalette = ({
  paletteInfo,
  handleDeletePalette,
}: SavedPaletteProps) => {
  const { paletteName, palette, id } = paletteInfo;
  return (
    <div className="saved-palette-item">
      <h5>
        {paletteName} - {palette.length} colors
      </h5>
      <div className="saved-colors-wrapper">
        {palette.map((hex) => (
          <Swatch key={hex} hex={hex} />
        ))}
        <button
          type="button"
          onClick={() => handleDeletePalette(id)}
          className="delete-palette-btn"
        >
          <TrashIcon fill="#D5D5D5" />
        </button>
      </div>
    </div>
  );
};

SavedPalette.propTypes = {
  paletteInfo: PropTypes.shape({
    id: PropTypes.string,
    paletteName: PropTypes.string,
    palette: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleDeletePalette: PropTypes.func.isRequired,
};

export default SavedPalette;
