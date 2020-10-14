interface SwatchInfo {
  hex: string;
  __typename: string;
}

export type ButtonProps = {
  text: string;
  handleClick: (param?: any) => void;
  isDisabled: boolean;
};

export type CartSwatchProps = {
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

export type SavedPaletteProps = {
  paletteInfo: PaletteType;
  handleDeletePalette: (id: string) => void;
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
  handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  isDisabled: boolean;
  isLoading: boolean;
};
