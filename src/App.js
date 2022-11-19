import { useState } from "react";
import DarkMode from "./Components/DarkMode/DarkMode";
import EyeBalls from "./Components/Eyes/Eyes";
import Projects from "./Components/Projects/Projects";
import Socials from "./Components/Socials/Socials";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  leftOmbre: "#ffeec4",
  rightOmbre: "#f8c9fa",
  pageBackground: "#fffaf6",
  eyeBackground: "#282c36",
  titleColor: "#dcg58b",
  tagLineColor: "black",
};

const DarkTheme = {
  leftOmbre: "#142d69",
  rightOmbre: "#008081",
  pageBackground: "#000000",
  eyeBackground: "#fffaf6",
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
      <Socials />
      <EyeBalls theme={theme} setTheme={setTheme} />
      <DarkMode theme={theme} setTheme={setTheme} />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
