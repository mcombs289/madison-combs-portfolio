import { useState } from "react";
import DarkMode from "./Components/DarkMode/DarkMode";
import Navbar from "./Components/NavigationBar/NavigationBar";
import Projects from "./Components/Projects/Projects";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  eyeBackground: "#282c36",
  titleColor: "#dcg58b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  eyeBackground: "white",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Navbar theme={theme} setTheme={setTheme} />
      <DarkMode theme={theme} setTheme={setTheme} />

      <Projects />
    </ThemeProvider>
  );
}

export default App;
