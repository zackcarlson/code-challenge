import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button.tsx";

configure({ adapter: new Adapter() });

const mockFn = jest.fn();
const wrapper = shallow(<Button text="Load More" handleClick={mockFn} />);

it("should call handleClick function when button is clicked", () => {
  wrapper.simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

it("should display the given button text", () => {
  expect(wrapper.text()).toEqual("Load More");
});
