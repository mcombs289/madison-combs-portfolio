import styled from "styled-components";

export const StyledSocialList = styled.ul`
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.a`
  margin-left: -18px;
  padding-bottom: 25px;
  stroke-width: 1px;
  color: #7293b8;
  font-size: 40px;
  font-weight: 100;
  &:hover {
    font-size: 45px;
    color: #5297f0;
  }
`;

export const Line = styled.div`
  height: 140px;
  width: 3px;
  background-color: #7293b8; ;
`;

// export const StyledSocialList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   &:after {
//     content: "";
//     display: block;
//     width: 1px;
//     height: 90px;
//     margin: 0 auto;
//     background-color: var(--light-slate);
//   }
//   li {
//     &:last-of-type {
//       margin-bottom: 20px;
//     }
//     a {
//       padding: 10px;
//       &:hover,
//       &:focus {
//         transform: translateY(-3px);
//       }
//       svg {
//         width: 20px;
//         height: 20px;
//       }
//     }
//   }
// `;
