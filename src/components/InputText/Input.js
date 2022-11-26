import React from "react";
import StyledInput from "./Input.styled";

const Input = (props) => {
  const { placeholder, children, onChange, value } = props;

  return (
    <StyledInput value={value} onChange={onChange} placeholder={placeholder}>
      {children}
    </StyledInput>
  );
};
export default Input;
