import React from "react";
import StyledFinalPage from "./FinalPage.styled";

const FinalPage = ({ children }) => {
  return (
    <StyledFinalPage>
      <h2>Check your form</h2>
      {children}
    </StyledFinalPage>
  );
};
export default FinalPage;
