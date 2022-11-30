import React from "react";
import { NavagationBar } from "./NavBarStyle";
import EyeBalls from "../Eyes/Eyes";

const NavBar = (props) => {
  return (
    <NavagationBar>
      <div class="logo">
        <a href="#">CodingLab</a>
      </div>
      <ul class="menu">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Category">Category</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href="#Feedback">Feedback</a>
        </li>
      </ul>
    </NavagationBar>
  );
};

export default NavBar;
