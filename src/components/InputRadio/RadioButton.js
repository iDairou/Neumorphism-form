import React from "react";
import { StyledRadioButton } from "./RadioButton.styled";

const RadioButton = ({ checked, name, type, value, key, opt }) => {
  return (
    <label>
      {opt}
      <StyledRadioButton
        checked={checked}
        name={name}
        type={type}
        value={value}
        key={key}
      ></StyledRadioButton>
    </label>
  );
};
export default RadioButton;
