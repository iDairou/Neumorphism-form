import React from "react";
import StyledHeader from "./Header.styled";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};
export default Header;
