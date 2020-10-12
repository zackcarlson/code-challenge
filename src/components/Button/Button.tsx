import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

type ButtonProps = {
  text: string,
  handleClick: () => void,
};

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
