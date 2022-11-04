import React, { useState, useEffect } from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import name from "./images/Madison-Combs-2.png";
import lightname from "./images/Madison-Combs.png";
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
      <Row lg={12} style={{ display: "flex", flexDirection: "row" }}>
        <Col lg={6} style={{ display: "flex", flexDirection: "row" }}>
          <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          {isOn ? (
            <p
              style={{
                fontSize: "30px",
                marginLeft: "1rem",
                marginTop: "1rem",
              }}
            >
              &#127769;
            </p>
          ) : (
            <p
              style={{
                fontSize: "40px",
                marginLeft: "1rem",
                marginTop: ".6rem",
              }}
            >
              &#127774;
            </p>
          )}
        </Col>
        <Col lg={6} style={{ marginLeft: "30%" }}>
          {isOn ? (
            <img style={{ height: "100px" }} src={lightname} alt="" />
          ) : (
            <img style={{ height: "100px" }} src={name} alt="" />
          )}
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavigationBar;
