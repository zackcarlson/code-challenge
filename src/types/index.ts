interface SwatchInfo {
  hex: string;
  __typename: string;
}

export type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export type DeletableSwatchProps = {
  hex: string;
  handleClick: () => void;
};

export type SwatchProps = {
  hex: string;
  isSelected?: boolean;
  handleClick?: () => void;
};

export type SwatchListProps = {
  swatches: SwatchInfo[];
};

export type PaletteType = {
  paletteName: string;
  palette: string[];
  id: string;
};

export type SavedPaletteListProps = {
  palettes: PaletteType[];
  handleDeletePalette: (id: string) => void;
};

export type SwatchBaseStyle = {
  backgroundColor: string;
  border: string;
};

export type SavePaletteFormProps = {
  handleChange: (e: any) => void;
  handleSubmit: () => void;
  text: string;
};
