import React from "react";
import { StyledCheckbox, StyledContainer } from "./Checkbox.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({ type = "checkbox", toggle }) => {
  return (
    <StyledContainer>
      <FontAwesomeIcon icon={faSun} />
      <StyledCheckbox
        onChange={toggle}
        style={{ fontSize: "35px" }}
        type={type}
      ></StyledCheckbox>
      <FontAwesomeIcon icon={faMoon} />
    </StyledContainer>
  );
};
export default Checkbox;
