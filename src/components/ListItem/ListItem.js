import React from "react";
import StyledListItem from "./ListItem.styled";

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
export default ListItem;
