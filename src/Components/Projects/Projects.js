import React from "react";
import { motion } from "framer-motion";
import {
  ProjectContainer,
  ProjectCard,
  ProjectCardImage,
  ButtonRow,
  ProjectButton,
  ProjectHeader,
  ProjectAbout,
  ProjectTitle,
  ProjectIcons,
  Line,
  LineContainer,
} from "./ProjectsStyles";
import { TfiNewWindow } from "react-icons/tfi";
import img1 from "../../images/keepsake.png";
import img2 from "../../images/bobaScreenshot.png";
import img3 from "../../images/Hanoi.png";

const Features = (props) => {
  return (
    <ProjectContainer>
      <LineContainer>
        <Line></Line>
        <ProjectHeader>Projects</ProjectHeader>
      </LineContainer>
      <ProjectCard data-aos="fade-right">
        <ProjectCardImage src={img1} alt="" />
        <ProjectAbout>
          <ProjectIcons />
          <div>
            <ProjectTitle>Keepsake</ProjectTitle>
            <p>
              A social media app meant to house general media reviews and
              recommendations. While there are apps out there specialized to
              specific forms of media, such as IMDB for movies and Goodreads for
              books, Keepsake provides a centralized place for you to share your
              thoughts and keep your friends updated on what you are watching
              and reading.
            </p>
            <br />
            <p>
              <b>Technologies:</b> Javascript, React V6, React-Redux, Node,
              Bootstrap, Express, Sequelize.
            </p>
            <ButtonRow>
              <ProjectButton
                as={motion.a}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: "Infinity",
                    repeatType: "loop",
                  },
                }}
                href="https://keepsake-2208.herokuapp.com/"
                target="_blank"
              >
                <TfiNewWindow />
              </ProjectButton>
              <ProjectButton
                as={motion.a}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: "Infinity",
                    repeatType: "loop",
                  },
                }}
                href="https://github.com/mcombs289/capstone"
                target="_blank"
              >
                GitHub
              </ProjectButton>
              <ProjectButton
                as={motion.a}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: "Infinity",
                    repeatType: "loop",
                  },
                }}
                href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                target="_blank"
              >
                YouTube
              </ProjectButton>
            </ButtonRow>
          </div>
        </ProjectAbout>
      </ProjectCard>

      <ProjectCard data-aos="fade-left">
        <ProjectAbout>
          <h2>Boba Shoppe E-commerce</h2>
          <p>
            An e-commerce application that sells Boba Tea with experience
            dependent on if the user is logged in to an account or not.
            Logged-in users can either be a customer or an admin. An admin is
            allowed to make changes to the price and quantity of the products
            sold. Was personally responsible for implementing and managing
            RESTful API’s and the Redux store, creating a seamless flow of data
            between the front and backend as well as authentication using JSON
            Web Tokens.
          </p>
          <ButtonRow>
            <ProjectButton
              as={motion.a}
              whileHover={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 1.5,
                  repeat: "Infinity",
                  repeatType: "loop",
                },
              }}
              href="https://github.com/mcombs289/Boba-Shoppe"
            >
              GitHub
            </ProjectButton>
          </ButtonRow>
        </ProjectAbout>

        <ProjectCardImage src={img2} alt="" />
      </ProjectCard>

      <ProjectCard data-aos="fade-right">
        <ProjectCardImage src={img3} alt="" />
        <ProjectAbout>
          <h2>Tower of Hanoi</h2>
          <p>
            As a solo project I created a front-end game inspired by the
            mathematical puzzel "Tower of Hanoi", coined in the 19th century by
            French mathematician Édouard Lucas. This project uses logic is used
            to ensure moves made by the player abide by the rules of the puzzle,
            as well as determine when the player has successfully completed the
            puzzle.
            <br />
          </p>
          <p>
            <b>Technologies:</b> HTML, CSS, Bootstrap, and JavaScript.
          </p>

          <ButtonRow>
            <ProjectButton
              as={motion.a}
              whileHover={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 1.5,
                  repeat: "Infinity",
                  repeatType: "loop",
                },
              }}
              href="https://codepen.io/mcombs7/details/yrZpRK"
            >
              CodePen
            </ProjectButton>
          </ButtonRow>
        </ProjectAbout>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default Features;
