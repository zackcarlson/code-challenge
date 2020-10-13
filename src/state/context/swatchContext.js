import makeStore from "../store";
import { SET_SWATCHES } from "../constants";

const initalState = JSON.parse(window.localStorage.getItem("swatches")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SWATCHES: {
      window.localStorage.setItem("swatches", JSON.stringify(action.swatches));
      return action.swatches;
    }
    default:
      return state;
  }
};

const [SwatchProvider, useSwatchStore, useSwatchDispatch] = makeStore(
  reducer,
  initalState
);

export { SwatchProvider, useSwatchStore, useSwatchDispatch };
