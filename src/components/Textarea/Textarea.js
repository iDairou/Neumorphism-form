import React from "react";
import StyledTextarea from "./Textarea.styled";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></StyledTextarea>
  );
};
export default Textarea;
