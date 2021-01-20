import React from 'react';
import styled from 'styled-components';

export default function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectTitle>projects</ProjectTitle>
      <ProjectNumbers>00</ProjectNumbers>
      <Project>frkn</Project>
      <ProjectNumbers>01</ProjectNumbers>
      <Project>makimaki</Project>
      <ProjectNumbers>02</ProjectNumbers>
      <Project>streamnow</Project>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 23.4375rem;
`;

const ProjectTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 12.5rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px#8d89ff;

  margin-right: 40.5rem;
`;

const ProjectNumbers = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 6.25rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px #8d89ff;
`;

const Project = styled.a`
  font-family: 'Racing Sans One', cursive;
  font-size: 9.25rem;

  color: transparent;
  -webkit-text-stroke: 0.5px #ececec;
`;
