import makeStore from "../store";
import SAVE_PALETTE from "../constants";

const initalState = JSON.parse(window.localStorage.getItem("palettes")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_PALETTE: {
      const { paletteName, palette } = action;
      return [...state, { paletteName, palette }];
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
