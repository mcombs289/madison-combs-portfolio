import { useState } from "react";
import DarkMode from "./Components/DarkMode/DarkMode";
import Navbar from "./Components/NavigationBar/NavigationBar";
import Projects from "./Components/Projects/Projects";
import Socials from "./Components/Socials/Socials";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#fffaf6",
  eyeBackground: "#282c36",
  titleColor: "#dcg58b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
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
      <Navbar theme={theme} setTheme={setTheme} />
      <DarkMode theme={theme} setTheme={setTheme} />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
