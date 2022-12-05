import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  > label {
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    width: 20%;
    margin: 0 auto;
  }
  > h3 {
    margin: 12px;
  }
`;
export default StyledForm;
