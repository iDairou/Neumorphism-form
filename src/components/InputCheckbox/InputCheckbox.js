import React from "react";
import StyledInputCheckbox from "./InputCheckbox.styled";

const InputCheckbox = ({ checked, name, opt, type, value }) => {
  return (
    <>
      <label>{opt}</label>
      <StyledInputCheckbox
        readOnly
        checked={checked}
        name={name}
        type={type}
        value={value}
      ></StyledInputCheckbox>
    </>
  );
};
export default InputCheckbox;
