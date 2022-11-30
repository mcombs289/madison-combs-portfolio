import styled from "styled-components";

export const NavagationBar = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 390px;
    height: 75px;
    background: #2980b9;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2980b9;
    margin: auto;
    z-index: 1000;
  }
`;
