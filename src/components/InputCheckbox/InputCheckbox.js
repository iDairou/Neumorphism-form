import React from "react";
import StyledInputCheckbox from "./InputCheckbox.styled";

const InputCheckbox = ({ checked, name, key, opt, type, value }) => {
  return (
    <>
      <label>{opt}</label>
      <StyledInputCheckbox
        checked={checked}
        name={name}
        key={key}
        type={type}
        value={value}
      ></StyledInputCheckbox>
    </>
  );
};
export default InputCheckbox;
