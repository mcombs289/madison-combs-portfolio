import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {
  Toggle,
  Page,
  Container,
  Intro,
  HelloWorld,
  Shadow,
  ProfilePicture,
} from "./DarkModeStyles";
import Typed from "react-typed";
import img1 from "../../images/profilePicture.png";

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
        <ProfilePicture src={img1} />
        <Shadow />
        <HelloWorld> Hello World,</HelloWorld>
        <Intro>
          <br />
          I'm{" "}
          <Typed
            strings={[
              "Madison!  ",
              "a Software Engineer!  ",
              "Madison!  ",
              "always learning!  ",
              "Madison!  ",
              "a gamer!  ",
              "Madison!  ",
              "a designer!  ",
              "Madison!  ",
              "a problem solver!  ",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </Intro>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Container>
    </Page>
  );
}

export default DarkMode;
