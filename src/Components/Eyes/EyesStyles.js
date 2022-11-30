import styled, { keyframes } from "styled-components";

// export const Eyes = styled.div`
//   position: absolute;
//   align-items: center;
//   justify-content: center;
//   top: 5rem;
//   text-align: center;
//   transform: translateY(-50%);
//   width: 10%;
// `;

// export const Eye = styled.div`
//   background-color: ${(props) => props.theme.eyeBackground};
//   transition: all 0.5s ease;
//   width: 140px;
//   height: 70px;
//   display: inline-block;
//   margin: 100px;
//   border-radius: 50%;
//   position: relative;
//   padding: 1em;
//   overflow: hidden;
// `;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// export const Eye = styled.div`
//   position: relative;
//   width: 50px;
//   height: 50px;
//   display: inline-block;
//   background: ${(props) => props.theme.eyeBackground};
//   margin: 0 10px;
//   border-radius: 50%;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 35px;
//     transform: translate(-50%, -50%);
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background: ${(props) => props.theme.pageBackground};
//     box-sizing: border-box;
//   }
//   &:hover {
//     animation: ${rotate} 1s linear infinite;
//   }
// `;
