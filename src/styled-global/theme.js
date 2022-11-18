import { createGlobalStyle } from "styled-components";
const lightTheme = {
  backgroundColor: "#e3e3e3",
  textColor: "black",
};
const darkTheme = {
  backgroundColor: "#292636",
  textColor: "#fff",
};

const GlobalStyle = createGlobalStyle`
 html {
 font-size: 10px;
 }
 body {
 font-family: Verdana, Tahoma, sans-serif;
 font-size: 1.6rem;
 background: ${(props) => props.theme.backgroundColor};
 color: ${(props) => props.theme.textColor};
 }
 #root{
    margin: 0 auto;
 }
`;
export default GlobalStyle;

export { lightTheme, darkTheme };
