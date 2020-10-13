import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Nav from "../components/Nav/Nav";
import { SwatchProvider } from "../state/context/swatchContext";
import { CartProvider } from "../state/context/cartContext";
import { PaletteProvider } from "../state/context/paletteContext";

const Routes = () => (
  <SwatchProvider>
    <CartProvider>
      <PaletteProvider>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </PaletteProvider>
    </CartProvider>
  </SwatchProvider>
);

export default Routes;
