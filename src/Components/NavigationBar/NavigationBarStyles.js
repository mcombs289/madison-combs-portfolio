import styled from "styled-components";

export const Eyes = styled.div`
  position: absolute;
  top: 4rem;
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
  margin: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const Ball = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.2s ease;
  position: relative;
  top: 50%;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
`;