import React from "react";
import StyledButton from "./Button.styled";

const Button = (props) => {
  const { onClick, children, disabled } = props;
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
