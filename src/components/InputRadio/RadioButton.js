import React from "react";
import { StyledRadioButton } from "./RadioButton.styled";

const RadioButton = ({ checked, name, type, value, opt }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "20%",
        margin: "0 auto",
      }}
    >
      <label>{opt}</label>
      <StyledRadioButton
        readOnly
        checked={checked}
        name={name}
        type={type}
        value={value}
      ></StyledRadioButton>
    </div>
  );
};
export default RadioButton;
