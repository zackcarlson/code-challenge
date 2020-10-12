import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SwatchList from "./SwatchList.tsx";
import Swatch from "../Swatch/Swatch.tsx";
import { CartProvider } from "../../state/context/cartContext";

configure({ adapter: new Adapter() });

it("should display given number of swatches", () => {
  const wrapper = mount(
    <CartProvider>
      <SwatchList
        swatches={[
          { hex: "000000", __typename: "Color" },
          { hex: "1693A5", __typename: "Color" },
          { hex: "FFFFFF", __typename: "Color" },
        ]}
      />
    </CartProvider>
  );
  expect(wrapper.find(Swatch)).toHaveLength(3);
});

it("should display no swatches if given empty swatch list", () => {
  const wrapper = mount(
    <CartProvider>
      <SwatchList swatches={[]} />
    </CartProvider>
  );
  expect(wrapper.find(Swatch)).toHaveLength(0);
});
