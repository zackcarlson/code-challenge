import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { ButtonProps } from "../../types";

const Button = ({ text, handleClick, isDisabled }: ButtonProps) => (
  <button
    type="button"
    onClick={handleClick}
    className={`button__base ${isDisabled ? "disabled" : "enabled"}`}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
