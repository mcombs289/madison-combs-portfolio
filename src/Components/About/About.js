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
      <h5>Get to know me</h5>
      <AboutContainer>
        <ProfilePicture src={img1} />
        <AboutContent>
          <AboutCards>
            <AboutCard>
              <IoMdSchool size={"3rem"} />
              <h4>Education</h4>
              <h5>Fordham University</h5>
              <small>BSc in Computer Science</small>
            </AboutCard>
            <AboutCard>
              <FaAward size={"3rem"} />
              <h4>Industry Experience</h4>
              <small>1 year</small>
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
