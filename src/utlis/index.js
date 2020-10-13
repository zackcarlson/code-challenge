/* eslint-disable import/prefer-default-export */
export const generateSwatchBaseStyles = (hex, isSelected = false) => {
  const hexCode = `#${hex}`;
  let borderColor = hexCode;
  if (isSelected) {
    if (hex === "000000") borderColor = "rgb(56 56 56)";
    else borderColor = "rgba(0, 0, 0, .5)";
  }

  const styles = {
    backgroundColor: hexCode,
    border: `4px solid ${borderColor}`,
  };

  return styles;
};
