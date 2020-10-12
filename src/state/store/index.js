import React from "react";
import PropTypes from "prop-types";

export default function makeStore(reducer, initialState) {
  const storeContext = React.createContext();
  const dispatchContext = React.createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  StoreProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  function useStore() {
    return React.useContext(storeContext);
  }

  function useDispatch() {
    return React.useContext(dispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
