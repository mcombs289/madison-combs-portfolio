import React from "react";
import { Eye, Eyes, Ball, Lash } from "./EyesStyles";

const EyeBalls = (props) => {
  document.onmousemove = (event) => {
    const eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = "rotate(" + rotation + "deg)";
    });
  };

  return (
    <Eyes>
      <Eye className="eye"></Eye>
      <Eye className="eye"></Eye>
    </Eyes>
  );
};

export default EyeBalls;
