import {
  AboutMe,
  AboutContainer,
  AboutContent,
  AboutCards,
  AboutCard,
  AboutBio,
  Resume,
} from "./AboutStyles";
import React from "react";
import img1 from "../../images/profilePicture.png";
import { ProfilePicture } from "../DarkMode/DarkModeStyles";
import { IoMdSchool } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import resumePdf from "../../images/Madison_Combs_Resume.pdf";

const About = (props) => {
  return (
    <AboutMe>
      <AboutContainer>
        <ProfilePicture src={img1} />
        <AboutContent>
          <AboutCards>
            <AboutCard>
              <IoMdSchool size={"3rem"} />
              <h2>Education</h2>
              <h4>Fordham University - BSc in Computer Science</h4>
            </AboutCard>
            <AboutCard>
              <FaAward size={"3rem"} />
              <h2>Industry Experience</h2>
              <h4>1 year</h4>
            </AboutCard>
          </AboutCards>
          <AboutBio>
            Fullstack engineer with a passion for UI/UX design, a Computer
            Science degree, and 1 year of professional experience as an
            Application Specialist.
          </AboutBio>
          <Resume onClick={() => window.open(resumePdf)}> Resume</Resume>
        </AboutContent>
      </AboutContainer>
    </AboutMe>
  );
};

export default About;
