import React from "react";
import {
  StyledProgressbar,
  StyledProgressbarLoaded,
} from "./Progressbar.styled";
const Progressbar = ({ style }) => {
  return (
    <div>
      <StyledProgressbar>
        <StyledProgressbarLoaded style={style} />
      </StyledProgressbar>
    </div>
  );
};
export default Progressbar;
