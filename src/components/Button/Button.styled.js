import styled from "styled-components";

const StyledButton = styled.button`
  width: 20%;
  margin: 50px;
  padding: 10px;
  border: none;
  color: ${(props) => props.theme.textColor};
  border-radius: 37px;
  background: transparent;
  font-weight: bold;
  box-shadow: ${(props) => props.theme.boxShadowBackground};
  cursor: pointer;
  :active {
    box-shadow: ${(props) => props.theme.checkedBoxShadow};
  }
`;
export default StyledButton;
