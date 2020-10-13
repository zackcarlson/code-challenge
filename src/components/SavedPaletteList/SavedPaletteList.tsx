import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Swatch from "../Swatch/Swatch";
import { PaletteType, SavedPaletteListProps } from "../../types";

const SavedPaletteList = ({
  palettes,
  handleDeletePalette,
}: SavedPaletteListProps) => {
  return (
    <ul className="saved-palette-list">
      {palettes &&
        palettes.length > 0 &&
        palettes.map((paletteInfo: PaletteType) => {
          const { paletteName, palette, id } = paletteInfo;
          return (
            <div key={uuidv4()}>
              <h4>{paletteName}</h4>
              {palette.map((hex) => (
                <Swatch key={hex} hex={hex} />
              ))}
              <button type="button" onClick={() => handleDeletePalette(id)}>
                DELETE
              </button>
            </div>
          );
        })}
    </ul>
  );
};

export default SavedPaletteList;
