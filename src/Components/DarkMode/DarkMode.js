import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { Toggle, Page, Container } from "./DarkModeStyles";

function DarkMode(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Container>
    </Page>
  );
}

export default DarkMode;
