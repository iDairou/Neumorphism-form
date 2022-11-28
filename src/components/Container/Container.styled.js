import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background: ${(props) => props.theme.containerBackground};
  border-radius: 20px;
  box-shadow: 2px 2px 10px #a8a8a8, 0px 0px 6px #a8a8a8;
  margin: 0 auto;
`;
export default StyledContainer;
