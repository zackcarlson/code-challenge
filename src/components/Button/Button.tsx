import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { ButtonProps } from "../../types";

const Button = ({ text, handleClick }: ButtonProps) => (
  <button type="button" onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
