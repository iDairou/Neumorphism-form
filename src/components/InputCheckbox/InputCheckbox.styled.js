import styled from "styled-components";

const StyledInputCheckbox = styled.input`
  position: relative;
  appearance: none;
  border-radius: 20%;
  border: none;
  width: 30px;
  height: 30px;
  margin-right: 30px;
  background: ${(props) => props.theme.radioBackground};
  box-shadow: ${(props) => props.theme.boxShadowBackground};
  transition: 0.3s;
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    width: calc(100% - 17px);
    height: calc(100% - 17px);
    border: 2px solid gray;
    border-radius: 20%;
    transition: 0.3s;
    transform: scale(1.1);
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  :checked::before {
    background-color: #00ff08;
    transform: translate(-50%, -50%);
  }
  :checked {
    background: ${(props) => props.theme.checkedBackground};
    box-shadow: ${(props) => props.theme.checkedBoxShadow};
  }
`;

export default StyledInputCheckbox;
