import React, { useState } from "react";
import "./index.css";
import "./dark.css";
import NavigationBar from "./NavigationBar";
import darkModeProf from "./images/darkModeProf.png";
import lightModeProf from "./images/lightModeProf.png";
import Keepsake from "./images/keepsake.png";
import Boba from "./images/boba.png";
import TowerOfHanoi from "./images/TowerOfHanoi.png";
import resume from "./images/Madison-Combs-Resume.pdf";
import { motion } from "framer-motion";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={isOn ? "dark-profile-body" : "profile-body"}>
      <NavigationBar isOn={isOn} setIsOn={setIsOn} />
      <div className="push-down">
        <header class={isOn ? "dark-main-header" : "main-header"}>
          {isOn ? (
            <img className="profile-picture" src={darkModeProf} alt="profpic" />
          ) : (
            <img
              className="profile-picture"
              src={lightModeProf}
              alt="profpic"
            />
          )}
          <br />
          <h1>
            <span>Madison Combs</span>
          </h1>
          <a href={resume} target="_blank" rel="noreferrer">
            Open Second PDF
          </a>
        </header>

        <main class="container">
          <section className={isOn ? "dark-card" : "card"}>
            <img src={Keepsake} alt="" />
            <div>
              <h2>Keepsake</h2>
              <p>
                A social media app meant to house general media reviews and
                recommendations. While there are apps out there specialized to
                specific forms of media, such as IMDB for movies and Goodreads
                for books, Keepsake provides a centralized place for you to
                share your thoughts and keep your friends updated on what you
                are watching and reading.
              </p>
              <br />
              <p>
                <b>Technologies:</b> Javascript, React V6, React-Redux, Node,
                Bootstrap, Express, Sequelize.
              </p>
              <div className="button-row">
                <motion.a
                  whileHover={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: "Infinity",
                      repeatType: "loop",
                    },
                  }}
                  href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                  class={isOn ? "dark-btn" : "btn"}
                >
                  Website
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: "Infinity",
                      repeatType: "loop",
                    },
                  }}
                  href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                  class={isOn ? "dark-btn" : "btn"}
                >
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: "Infinity",
                      repeatType: "loop",
                    },
                  }}
                  href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                  class={isOn ? "dark-btn" : "btn"}
                >
                  YouTube
                </motion.a>
              </div>
            </div>
          </section>

          <section className={isOn ? "dark-card" : "card"} data-aos="fade-left">
            <img src={Boba} alt="" />
            <div>
              <h2>Acrylic Painting Two</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                error enim laudantium, animi veniam libero eveniet culpa unde
                perferendis illo fugit corporis, voluptatibus totam dolorum,
                maiores magnam officia. Ab, delectus.
              </p>
              <div className="button-row">
                <motion.a
                  whileHover={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: "Infinity",
                      repeatType: "loop",
                    },
                  }}
                  href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                  class={isOn ? "dark-btn" : "btn"}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </section>

          <section
            className={isOn ? "dark-card" : "card"}
            data-aos="fade-right"
          >
            <img src={TowerOfHanoi} alt="" />
            <div>
              <h2>Acrylic Painting Three</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                error enim laudantium, animi veniam libero eveniet culpa unde
                perferendis illo fugit corporis, voluptatibus totam dolorum,
                maiores magnam officia. Ab, delectus.
              </p>
              <div className="button-row">
                <a
                  href="https://codepen.io/mcombs7/details/yrZpRK"
                  class={isOn ? "dark-btn" : "btn"}
                >
                  CodePen
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
