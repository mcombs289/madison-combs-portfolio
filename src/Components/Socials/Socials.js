import React from "react";
import { StyledSocialList, Line, Icon } from "./SocialsSyles";
import { TbBrandGithub } from "react-icons/tb";
import { FiFigma, FiDribbble, FiCodepen, FiLinkedin } from "react-icons/fi";

const Socials = (props) => {
  return (
    <StyledSocialList>
      <Icon href="https://github.com/mcombs289" target="blank">
        <TbBrandGithub />
      </Icon>
      <Icon href="https://www.linkedin.com/in/madisonlcombs" target="blank">
        <FiLinkedin />
      </Icon>
      <Icon href="https://codepen.io/mcombs7" target="blank">
        <FiCodepen />
      </Icon>
      <Icon
        href="https://www.figma.com/files/user/1154097066284403402?fuid=1154097066284403402"
        target="blank"
      >
        <FiFigma />
      </Icon>
      <Icon href="https://dribbble.com/maddyos" target="blank">
        <FiDribbble />
      </Icon>
      <Line />
    </StyledSocialList>
  );
};

export default Socials;
