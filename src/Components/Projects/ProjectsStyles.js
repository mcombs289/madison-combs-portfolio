import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin: auto;
  overflow: auto;
  padding: 4rem 10rem;
  background: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  background: linear-gradient(
    131.66deg,
    ${(props) => props.theme.leftOmbre} 0%,
    ${(props) => props.theme.rightOmbre} 100%
  );
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2.8px 2.2px rgba(3, 4, 94, 0.04),
    0 6.7px 5.3px rgba(3, 4, 94, 0.048), 0 12.5px 10px rgba(3, 4, 94, 0.06),
    0 22.3px 17.9px rgba(3, 4, 94, 0.052), 0 41.8px 33.4px rgba(3, 4, 94, 0.016),
    0 10px 80px rgba(3, 4, 94, 0.12);
  transition: all 0.5s ease;
  @media screen and (max-width: 1180px) {
    display: block;
  }
  &:nth-child(even) img {
    order: 2;
    border-bottom-left-radius: 0rem;
    border-top-left-radius: 0rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    @media screen and (max-width: 768px) {
      border-bottom-left-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
    }
  }
  img {
    transition: all 1.2s ease;
  }
`;

export const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  @media screen and (max-width: 768px) {
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 1rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProjectButton = styled.button`
  display: inline-block;
  text-decoration: none;
  background: #f2bb18;
  color: white;
  padding: 0.8rem 1.8rem;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  margin-right: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;
