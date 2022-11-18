import styled from "styled-components";

export const StyledSocialList = styled.ul`
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.a`
  margin-left: -18px;
  padding-bottom: 25px;
  stroke-width: 1px;
  color: #7293b8;
  font-size: 30px;
  font-weight: 100;
  &:hover {
    font-size: 45px;
    color: #5297f0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  height: 140px;
  width: 3px;
  background-color: #7293b8;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
