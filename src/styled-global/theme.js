import { createGlobalStyle } from "styled-components";

const lightTheme = {
  backgroundColor: "#e3e3e3",
  textColor: "black",
  containerBackground: "#ebecf0",
  radioBackground: "linear-gradient(145deg, #fbfdff, #d4d4d8)",
  boxShadowBackground: "5px 5px 10px #8b8b8e, -5px -5px 10px #ffffff",
  checkedBackground: "#ebecf0",
  checkedBoxShadow: "inset 5px 5px 10px #8b8b8e, inset -5px -5px 10px #ffffff",
  textFieldShadow: "inset 5px 5px 10px #7d7d7d, inset -5px -5px 10px #ffffff",
};
const darkTheme = {
  backgroundColor: "#292636",
  textColor: "#fff",
  containerBackground: "#1c1830",
  radioBackground: "linear-gradient(145deg, #1e1a33, #19162b)",
  boxShadowBackground: "5px 5px 10px #0f0d1a, -5px -5px 10px #292346",
  checkedBackground: "#1c1830",
  checkedBoxShadow: "inset 5px 5px 10px #0f0d1a, inset -5px -5px 10px #292346",
  textFieldShadow: "inset 5px 5px 10px #0f0d1a, inset -5px -5px 10px #292346",
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
