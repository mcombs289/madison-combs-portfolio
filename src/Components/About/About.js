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
              <h4>2 years</h4>
            </AboutCard>
          </AboutCards>
          <AboutBio>
            <p>
              Hello! I'm a passionate Fullstack Engineer with a strong flair for
              user-centric UI/UX design and a solid background in backend
              development. My journey started with a Computer Science degree
              from Fordham University, and I further honed my skills at The
              Grace Hopper Program at Fullstack Academy, gaining expertise in
              Javascript, React, Redux, Node, Express, and Sequelize.
            </p>
            <p>
              Beyond coding, I find immense fulfillment in mentoring and
              supporting women in tech. This cause resonates deeply with me, and
              I actively engage in fostering a diverse and inclusive tech
              community.
            </p>
          </AboutBio>
          <Resume onClick={() => window.open(resumePdf)}> Resume</Resume>
        </AboutContent>
      </AboutContainer>
    </AboutMe>
  );
};

export default About;
