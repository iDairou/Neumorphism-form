import React from "react";
import StyledInput from "./Input.styled";

const Input = (props) => {
  const { placeholder, children } = props;

  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};
export default Input;
