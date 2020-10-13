import React, { useEffect, useState } from "react";
import "./Cart.css";
import CurrentPalette from "../../components/CurrentPalette/CurrentPalette";
import SavedPaletteList from "../../components/SavedPaletteList/SavedPaletteList.tsx";
import {
  usePaletteStore,
  usePaletteDispatch,
} from "../../state/context/paletteContext";
import { useCartStore, useCartDispatch } from "../../state/context/cartContext";
import SavePaletteForm from "../../components/SavePaletteForm/SavePaletteForm";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const palette = [...cart];
    const newPalettes = [...palettes, { paletteName: text, palette }];
    await paletteDispatch({ type: SAVE_PALETTE, paletteName: text, palette });
    await cartDispatch({ type: CLEAR_CART });
    setPalettes(newPalettes);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDeletePalette = async (id) => {
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
    await paletteDispatch({ type: DELETE_PALETTE, id });
    setPalettes(newPalettes);
  };

  useEffect(() => {
    setPalettes(paletteList);
  }, [paletteList]);

  return (
    <div className="cart-page">
      <CurrentPalette />
      <SavePaletteForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
      />
      <SavedPaletteList
        palettes={palettes}
        handleDeletePalette={handleDeletePalette}
      />
    </div>
  );
};

export default Cart;
