import React from "react";
import { StyledSocialList, Line, Icon } from "./SocialsSyles";
import { TbBrandGithub } from "react-icons/tb";
import { FiFigma, FiDribbble, FiCodepen, FiLinkedin } from "react-icons/fi";

const Socials = (props) => {
  return (
    <StyledSocialList>
      <Icon>
        <TbBrandGithub />
      </Icon>
      <Icon>
        <FiLinkedin />
      </Icon>
      <Icon>
        <FiCodepen />
      </Icon>
      <Icon>
        <FiFigma />
      </Icon>
      <Icon>
        <FiDribbble />
      </Icon>
      <Line />
    </StyledSocialList>
  );
};

export default Socials;
