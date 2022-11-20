import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-global/theme";
import GlobalStyle from "./styled-global/theme";
import ResetStyle from "./styled-global/Reset";
import Form from "./components/Form";
import Checkbox from "./components/ThemeChanger/Checkbox";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Form />
        <Checkbox toggle={() => themeToggler()} />
      </ThemeProvider>
    </>
  );
}

export default App;
