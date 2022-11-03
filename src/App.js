import React, { useState } from "react";
import "./index.css";
import "./dark.css";
import { motion } from "framer-motion";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      <header class="main-header">
        <h1>
          <span>Madison Combs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quam!
        </p>
      </header>

      <main class="container">
        <section className={isOn ? "card" : "dark-card"}>
          <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
          <div>
            <h3>Keepsake</h3>
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
            <div className="button-row">
              <a
                href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                class="btn"
              >
                Website
              </a>
              <a
                href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                class="btn"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/watch?v=jQnAIYv9v08&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=4"
                class="btn"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>

        <section className={isOn ? "card" : "dark-card"} data-aos="fade-left">
          <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
          <div>
            <h3>Acrylic Painting Two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
          </div>
        </section>

        <section className={isOn ? "card" : "dark-card"} data-aos="fade-right">
          <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
          <div>
            <h3>Acrylic Painting Three</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
          </div>
        </section>

        <section className={isOn ? "card" : "dark-card"} data-aos="fade-left">
          <img src="https://i.ibb.co/5LkJFRP/paint-4.png" alt="" />
          <div>
            <h3>Acrylic Painting Four</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
          </div>
        </section>

        <section className={isOn ? "card" : "dark-card"} data-aos="fade-right">
          <img src="https://i.ibb.co/61R8Q2y/paint-5.png" alt="" />
          <div>
            <h3>Acrylic Painting Five</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
