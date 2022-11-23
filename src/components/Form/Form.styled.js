import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  margin: 0 auto;

  > label {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
`;
export default StyledForm;
