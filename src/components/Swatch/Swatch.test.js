import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Swatch from "./Swatch.tsx";

configure({ adapter: new Adapter() });

const wrapper = shallow(<Swatch hex="000000" isSelected />);
const containerStyle = wrapper.get(0).props.style;

it("should display hex prop as background color", () => {
  expect(containerStyle).toHaveProperty("backgroundColor", "#000000");
});

it("should display lighter borderColor if isSelected prop is true", () => {
  expect(containerStyle).toHaveProperty("border", "4px solid rgb(56 56 56)");
});
