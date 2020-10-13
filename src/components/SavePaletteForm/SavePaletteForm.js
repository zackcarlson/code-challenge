/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";
import { useCartStore } from "../../state/context/cartContext";
import "./SavePaletteForm.css";
import Button from "../Button/Button.tsx";

const SavePaletteForm = ({ handleChange, handleSubmit, text }) => {
  const cart = useCartStore();
  const renderForm =
    cart && cart.length > 0 ? (
      <form className="save-palette">
        <label>
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <Button text="Save Palette" handleClick={handleSubmit} />
      </form>
    ) : (
      <div />
    );

  return renderForm;
};

SavePaletteForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SavePaletteForm;
