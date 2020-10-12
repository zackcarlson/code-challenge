import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import Routes from "../../routes";
import ApolloContext from "../../state/apollo";

configure({ adapter: new Adapter() });

const wrapper = mount(
  <ApolloContext>
    <MemoryRouter initialEntries={["/"]}>
      <Routes />
    </MemoryRouter>
  </ApolloContext>
);

it("should navigate to cart page when you click the cart icon", () => {
  wrapper.find(".cart-icon").simulate("click", { button: 0 });
  expect(wrapper.find(Cart)).toHaveLength(1);
});

it("should navigate to home page when you click the logo icon", () => {
  wrapper.find(".logo-icon").simulate("click", { button: 0 });
  expect(wrapper.find(Home)).toHaveLength(1);
});
