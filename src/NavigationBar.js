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

  let width = window.innerWidth;
  console.log("wid", width);

  let balls = document.getElementsByClassName("ball");
  document.onmousemove = function (event) {
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
  };

  return (
    <Navbar
      fluid
      className={`${fixed ? "sticky" : ""} ${isOn ? "dark-navbar" : "navbar"}`}
    >
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col lg={4}>
          {isOn ? (
            <img style={{ height: "50px" }} src={lightname} alt="" />
          ) : (
            <img style={{ height: "50px" }} src={name} alt="" />
          )}
        </Col>
        {window.innerWidth > 1000 ? (
          <Col lg={4}>
            <div className="eyes">
              <div className="eye">
                <div
                  className={isOn ? "dark-ball ball" : "light-ball ball"}
                ></div>
              </div>
              <div className="eye">
                <div
                  className={isOn ? "dark-ball ball" : "light-ball ball"}
                ></div>
              </div>
            </div>
          </Col>
        ) : null}
        <Col lg={4} className="toggle">
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
      </Row>
    </Navbar>
  );
};

export default NavigationBar;
