import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 50%;
  min-height: 150px;
  resize: vertical;
  border-radius: 15px;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.textColor};
  align-self: center;
  padding: 15px;
  box-shadow: ${(props) => props.theme.textFieldShadow};
`;
export default StyledTextarea;
