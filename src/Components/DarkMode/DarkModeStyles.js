import styled, { keyframes } from "styled-components";

export const Toggle = styled.button`
  margin-top: 0;
  margin-right: 2rem;
  top: 0;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-size: cover;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.eyeBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

export const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

export const HelloWorld = styled.p`
  font-size: 50px;
  text-align: left;
  margin-bottom: 0;
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

export const Intro = styled.p`
  font-size: 70px;
  text-align: left;
  margin-top: -4rem;
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const float = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
`;

const grow = keyframes`
  0% { transform: scale(.95,.95); }
  50%  { transform: scale(1,1) ; }
  100%   { transform: scale(.95,.95);  } 

`;

export const ProfilePicture = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 1rem;
  margin-top: 2rem;
  border-radius: 1rem;
  animation: ${float} 2s ease-in-out infinite;
`;

export const Shadow = styled.div`
  margin-top: 2rem;
  height: 16px;
  width: 400px;
  background: #999;
  opacity: 0.6;
  border-radius: 100%;
  box-shadow: 0 0 2px 2px white inset;
  animation: ${grow} 2s ease infinite alternate;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const Bio = styled.p``;