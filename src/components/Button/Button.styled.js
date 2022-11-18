import styled from "styled-components";

const StyledButton = styled.button`
  width: 20%;
  margin: 100px;
  padding: 10px;
  border: none;
  border-radius: 37px;
  box-shadow: 5px 5px 10px #7d7d7d, -5px -5px 10px #ffffff;
  cursor: pointer;
  :active {
    box-shadow: inset 5px 5px 10px #7d7d7d, inset -5px -5px 10px #ffffff;
  }
`;
export default StyledButton;
