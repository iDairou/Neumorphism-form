import React from "react";
import { StyledCheckbox, StyledContainer } from "./Checkbox.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({ type = "checkbox", toggle }) => {
  const styleForFonts = {
    fontSize: "30px",
    marginBottom: "2px",
  };
  return (
    <StyledContainer>
      <FontAwesomeIcon style={styleForFonts} icon={faSun} />
      <StyledCheckbox
        onChange={toggle}
        style={{ fontSize: "35px" }}
        type={type}
      ></StyledCheckbox>
      <FontAwesomeIcon style={styleForFonts} icon={faMoon} />
    </StyledContainer>
  );
};
export default Checkbox;
