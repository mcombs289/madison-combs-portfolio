import React from "react";
import { Eye, Eyes, Ball } from "./NavigationBarStyles";

const NavigationBar = (props) => {
  console.log("document", document);
  let balls = document.getElementsByClassName("ball");
  document.onmousemove = function (event) {
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
  };

  return (
    <Eyes>
      <Eye>
        <Ball className="ball"></Ball>
      </Eye>
    </Eyes>
  );
};

export default NavigationBar;
