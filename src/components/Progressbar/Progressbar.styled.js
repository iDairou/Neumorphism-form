import styled from "styled-components";

const StyledProgressbar = styled.div`
  width: 800px;
  height: 30px;
  box-shadow: inset 5px 5px 10px #7d7d7d, inset -5px -5px 10px #ffffff;
  border-radius: 15px;
  margin: 20px auto;
`;
const StyledProgressbarLoaded = styled.div`
  width: 33.3%;
  height: 30px;
  box-shadow: inset 5px 5px 10px #7d7d7d, inset -5px -5px 10px black;
  border-radius: 15px;
  background-color: #2dc532;
`;

export { StyledProgressbar, StyledProgressbarLoaded };
