import { useState } from "react";
import DarkMode from "./Components/DarkMode/DarkMode";
import EyeBalls from "./Components/Eyes/Eyes";
import Projects from "./Components/Projects/Projects";
import Socials from "./Components/Socials/Socials";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
const LightTheme = {
  leftOmbre: "#ffeec4",
  rightOmbre: "#f8c9fa",
  pageBackground: "#fffaf6",
  toggleBackground: "#282c36",
  iconColor: "#7293b8",
  titleColor: "#7293b8",
  boxColor: "#7293b8",
  tagLineColor: "black",
};

const DarkTheme = {
  iconColor: "#070F22",
  leftOmbre: "#142d69",
  rightOmbre: "#008081",
  pageBackground: "#070F22",
  toggleBackground: "#7293b8",
  titleColor: "lightpink",
  boxColor: "lightpink",
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
      {/* <NavBar theme={theme} setTheme={setTheme} /> */}
      <DarkMode theme={theme} setTheme={setTheme} />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
