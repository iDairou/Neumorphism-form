import React from "react";
import StyledButton from "./Button.styled";

const Button = (props) => {
  const { onClick, children, disabled, hidden } = props;
  return (
    <StyledButton hidden={hidden} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
