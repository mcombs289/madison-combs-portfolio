import styled from "styled-components";

export const Eyes = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 10rem;
  text-align: center;
  transform: translateY(-50%);
  width: 100%;
`;

export const Eye = styled.div`
  background-color: ${(props) => props.theme.eyeBackground};
  transition: all 0.5s ease;
  width: 140px;
  height: 70px;
  display: inline-block;
  margin: 100px;
  border-radius: 50%;
  position: relative;
  padding: 1em;
  overflow: hidden;
`;

export const Ball = styled.div`
  height: 40px;
  width: 40px;
  margin: 1px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.2s ease;
  position: relative;
  top: 50%;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
`;

export const Lash = styled.div`
  height: 40px;
  width: 4px;
  background-color: black;
`;
