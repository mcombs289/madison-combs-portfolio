import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
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
    <Navbar className={`navbar ${fixed ? "sticky" : ""}`}>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </Navbar>
  );
};

export default NavigationBar;
