import styled from "styled-components";

const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  border-radius: 50px;
  border: none;
  width: 60px;
  height: 30px;
  background: #c6c6c6;
  transition: 0.3s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    transition: 0.3s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  :checked {
    background-color: #03a9f4;
  }
  :checked::before {
    left: 30px;
  }
`;
const StyledContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 90%;
`;

export { StyledCheckbox, StyledContainer };
