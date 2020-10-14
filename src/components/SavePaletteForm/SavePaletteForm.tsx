/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";
import { useCartStore } from "../../state/context/cartContext";
import "./SavePaletteForm.css";
import Button from "../Button/Button";
import { SavePaletteFormProps } from "../../types";

const SavePaletteForm = ({
  handleChange,
  handleSubmit,
  text,
  isLoading,
  isDisabled,
}: SavePaletteFormProps) => {
  const cart = useCartStore();
  const renderForm =
    cart && cart.length > 0 ? (
      <form className="save-palette-form">
        <label htmlFor="palette-input">Name and save your color palette</label>
        <div className="input-wrapper">
          <input
            placeholder="Color palette name"
            type="text"
            value={text}
            onChange={handleChange}
            id="palette-input"
          />
          <Button
            text={isLoading ? "Loading" : "Save Palette"}
            handleClick={handleSubmit}
            isDisabled={isDisabled}
          />
        </div>
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
