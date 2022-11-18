import React from "react";
import { motion } from "framer-motion";
import {
  ProjectContainer,
  ProjectCard,
  ProjectCardImage,
  ButtonRow,
  ProjectButton,
} from "./ProjectsStyles";
import { TfiNewWindow } from "react-icons/tfi";
import img1 from "../../images/keepsake.png";

const Features = (props) => {
  return (
    <ProjectContainer>
      <ProjectCard data-aos="fade-right">
        <ProjectCardImage src={img1} alt="" />
        <div>
          <h2>Keepsake</h2>
          <p>
            A social media app meant to house general media reviews and
            recommendations. While there are apps out there specialized to
            specific forms of media, such as IMDB for movies and Goodreads for
            books, Keepsake provides a centralized place for you to share your
            thoughts and keep your friends updated on what you are watching and
            reading.
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
              href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
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
      </ProjectCard>

      <ProjectCard data-aos="fade-left">
        <ProjectCardImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
        />

        <div>
          <h2>Acrylic Painting Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
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
              href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
            >
              GitHub
            </ProjectButton>
          </ButtonRow>
        </div>
      </ProjectCard>

      <ProjectCard data-aos="fade-right">
        <img src={"TowerOfHanoi"} alt="" />
        <div>
          <h2>Acrylic Painting Three</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
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
        </div>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default Features;
