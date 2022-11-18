import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { Toggle, Page, Container } from "./DarkModeStyles";
import Typed from "react-typed";

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
        <p>
          Hello World, I'm{" "}
          <Typed
            strings={[
              "Madison!  ",
              "always learning!  ",
              "a Software Engineer!  ",
              "a Designer!  ",
              "a Gamer!  ",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </p>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Container>
    </Page>
  );
}

export default DarkMode;
