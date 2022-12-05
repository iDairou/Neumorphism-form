import styled from "styled-components";

const StyledInput = styled.input`
  width: 20%;
  padding: 10px;
  border: none;
  border-radius: 37px;
  box-shadow: ${(props) => props.theme.textFieldShadow};
  align-self: center;
  color: ${(props) => props.theme.textColor};
  margin: 10px;
  font-size: 15px;
  background: transparent;

`;
export default StyledInput;
