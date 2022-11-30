import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {
  Toggle,
  Page,
  Container,
  Intro,
  HelloWorld,
  Shadow,
  Bio,
  ProfilePicture,
} from "./DarkModeStyles";
import Typed from "react-typed";
import img1 from "../../images/profilePicture.png";
import About from "../About/About";

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
        <About />
      </Container>
    </Page>
  );
}

export default DarkMode;

// <ProfilePicture src={img1} />
//         <HelloWorld> Hello World,</HelloWorld>
//         <Intro>
//           <br />
//           I'm{" "}
//           <Typed
//             strings={[
//               "Madison!  ",
//               "a Software Engineer!  ",
//               "Madison!  ",
//               "always learning!  ",
//               "Madison!  ",
//               "a gamer!  ",
//               "Madison!  ",
//               "a designer!  ",
//               "Madison!  ",
//               "a problem solver!  ",
//             ]}
//             typeSpeed={80}
//             backSpeed={80}
//             loop
//           />
//         </Intro>
//         <Bio>
//           Fullstack engineer with a passion for UI/UX design, a Computer Science
//           degree, and 1 year of professional experience as an Application
//           Specialist.
//         </Bio>
