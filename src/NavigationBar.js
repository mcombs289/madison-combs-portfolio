import React, { useState, useEffect } from "react";
import { Navbar, Nav, Link } from "react-bootstrap";
import { motion } from "framer-motion";

const NavigationBar = ({ isOn, setIsOn }) => {
  const [fixed, setFixed] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`${fixed ? "sticky" : ""} ${isOn ? "dark-navbar" : "navbar"}`}
    >
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      {isOn ? (
        <p style={{ fontSize: "30px", marginLeft: "1rem", marginTop: "1rem" }}>
          &#127769;
        </p>
      ) : (
        <p style={{ fontSize: "40px", marginLeft: "1rem", marginTop: ".6rem" }}>
          &#127774;
        </p>
      )}
    </Navbar>
  );
};

export default NavigationBar;
