import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin: auto;
  overflow: auto;
  padding: 0 20rem;
  background: ${(props) => props.theme.pageBackground};
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  background: linear-gradient(131.66deg, #ffeec4 0%, #f8c9fa 100%);
  margin-bottom: 2rem;
  border-radius: 1rem;
  &:nth-child(even) img {
    order: 2;
    border-bottom-left-radius: 0rem;
    border-top-left-radius: 0rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  img {
    filter: grayscale(100%);
  }
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

export const ProjectCardImage = styled.img`
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
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
