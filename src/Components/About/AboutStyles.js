import styled, { keyframes } from "styled-components";

export const AboutMe = styled.div``;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: 5%;
  padding: 10rem;
  @media screen and (max-width: 1424px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media screen and (max-width: 600px) {
  }
`;

export const AboutContent = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 1rem;
  }
`;

export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  @media screen and (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const AboutCard = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
  color: white;
`;

export const AboutBio = styled.h3`
  color: rgb(114, 147, 184);
  margin: 1rem;
  margin-top: 3rem;
  font-size: 25px;
`;

export const Resume = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
