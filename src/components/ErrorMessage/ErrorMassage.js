import React from "react";
import StyledErrorMessage from "./ErrorMessage.styled";

const ErrorMessage = ({ children }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};
export default ErrorMessage;
