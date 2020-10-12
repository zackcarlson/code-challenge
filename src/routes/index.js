import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Nav from "../components/Nav/Nav";
import { SwatchProvider } from "../state/context/swatchContext";
import { CartProvider } from "../state/context/cartContext";

const Routes = () => (
  <CartProvider>
    <div>
      <Nav />

      <Switch>
        <Route exact path="/">
          <SwatchProvider>
            <Home />
          </SwatchProvider>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  </CartProvider>
);

export default Routes;
