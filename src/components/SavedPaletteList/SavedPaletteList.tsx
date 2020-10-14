import React from "react";
import PropTypes from "prop-types";
import { PaletteType, SavedPaletteListProps } from "../../types";
import SavedPalette from "../SavedPalette/SavedPalette";
import "./SavedPaletteList.css";

const SavedPaletteList = ({
  palettes,
  handleDeletePalette,
}: SavedPaletteListProps) => {
  return (
    <div className="previous-palettes">
      <h3>Previously saved color palettes</h3>
      <div className="saved-palette-list">
        {palettes && palettes.length > 0 ? (
          palettes.map((paletteInfo: PaletteType) => {
            const { id, paletteName } = paletteInfo;
            return (
              <SavedPalette
                paletteInfo={paletteInfo}
                handleDeletePalette={handleDeletePalette}
                key={`${id}-${paletteName}`}
              />
            );
          })
        ) : (
          <p>You haven&apos;t saved any palettes, yet.</p>
        )}
      </div>
    </div>
  );
};

SavedPaletteList.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      paletteName: PropTypes.string,
      palette: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  handleDeletePalette: PropTypes.func.isRequired,
};

export default SavedPaletteList;
