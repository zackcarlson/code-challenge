/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Cart.css";
import CartSwatchList from "../../components/CartSwatchList/CartSwatchList.tsx";
import SavedPaletteList from "../../components/SavedPaletteList/SavedPaletteList.tsx";
import {
  usePaletteStore,
  usePaletteDispatch,
} from "../../state/context/paletteContext";
import { useCartStore, useCartDispatch } from "../../state/context/cartContext";
import SavePaletteForm from "../../components/SavePaletteForm/SavePaletteForm.tsx";
import {
  SAVE_PALETTE,
  CLEAR_CART,
  DELETE_PALETTE,
} from "../../state/constants";

const Cart = () => {
  const cart = useCartStore();
  const paletteList = usePaletteStore();
  const paletteDispatch = usePaletteDispatch();
  const cartDispatch = useCartDispatch();
  const [text, setText] = useState("");
  const [palettes, setPalettes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsDisabled(true);
      setIsLoading(true);

      const newPalette = {
        paletteName: text,
        palette: [...cart],
        id: uuidv4(),
      };
      const newPalettes = [...palettes, newPalette];

      await paletteDispatch({
        type: SAVE_PALETTE,
        payload: newPalette,
      });
      await cartDispatch({ type: CLEAR_CART });

      setPalettes(newPalettes);
      setText("");
      setIsLoading(false);
      setIsDisabled(false);
    } catch (err) {
      setIsLoading(false);
      setIsDisabled(false);
      console.log("Error saving palette", err);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDeletePalette = async (id) => {
    try {
      const newPalettes = palettes.filter((info) => {
        if (info.id !== id) {
          const temp = {};
          temp.paletteName = info.paletteName;
          temp.palette = [...info.palette];
          temp.id = info.id;
          return temp;
        }
        return "";
      });
      await paletteDispatch({ type: DELETE_PALETTE, payload: id });
      setPalettes(newPalettes);
    } catch (err) {
      console.log("Error deleting palette", err);
    }
  };

  useEffect(() => {
    setPalettes(paletteList);
  }, [paletteList]);

  return (
    <div className="cart-page">
      <CartSwatchList />
      <SavePaletteForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
        isLoading={isLoading}
        isDisabled={isDisabled}
      />
      <div className="horizontal-line" />
      <SavedPaletteList
        palettes={palettes}
        handleDeletePalette={handleDeletePalette}
      />
    </div>
  );
};

export default Cart;
