import { v4 as uuidv4 } from "uuid";
import makeStore from "../store";
import { SAVE_PALETTE, DELETE_PALETTE } from "../constants";

const initalState = JSON.parse(window.localStorage.getItem("palettes")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_PALETTE: {
      const { paletteName, palette } = action;
      const palettes = [...state, { paletteName, palette, id: uuidv4() }];

      window.localStorage.setItem("palettes", JSON.stringify(palettes));
      return palettes;
    }
    case DELETE_PALETTE: {
      const { id } = action;
      const palettes = state.filter((info) => {
        if (info.id !== id) {
          const temp = {};
          temp.paletteName = info.paletteName;
          temp.palette = [...info.palette];
          temp.id = info.id;
          return temp;
        }
        return "";
      });

      window.localStorage.setItem("palettes", JSON.stringify(palettes));
      return palettes;
    }
    default:
      return state;
  }
};

const [PaletteProvider, usePaletteStore, usePaletteDispatch] = makeStore(
  reducer,
  initalState
);

export { PaletteProvider, usePaletteStore, usePaletteDispatch };
