import React from "react";
import { Eye, Eyes, Ball, Lash } from "./EyesStyles";

const EyeBalls = (props) => {
  let balls = document.getElementsByClassName("ball");
  document.onmousemove = (event) => {
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
  };

  return (
    <Eyes>
      <Lash />
      <Lash />
      <Lash />
      <Eye>
        <Ball className="ball"></Ball>
      </Eye>
    </Eyes>
  );
};

export default EyeBalls;
