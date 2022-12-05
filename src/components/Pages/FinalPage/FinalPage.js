import React from "react";
import { StyledFinalPage, StyledUl, StyledH2 } from "./FinalPage.styled";

const FinalPage = ({ children }) => {
  return (
    <StyledFinalPage>
      <StyledH2>Check your form</StyledH2>
      <StyledUl>{children}</StyledUl>
    </StyledFinalPage>
  );
};
export default FinalPage;
