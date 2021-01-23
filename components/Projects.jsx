import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  let projectTitle = useRef(null);
  let project0 = useRef(null);
  let project1 = useRef(null);
  let project2 = useRef(null);
  let projectNumber = useRef(null);
  let projectNumber2 = useRef(null);
  let projectNumber3 = useRef(null);

  useEffect(() => {
    gsap.from(projectNumber, 2, {
      opacity: 0,
      x: -150,
      ease: Power3.easeOut,
      scrollTrigger: project0,
    });
    gsap.from(projectNumber2, 2, {
      opacity: 0,
      x: 150,
      ease: Power3.easeOut,
      scrollTrigger: project1,
    });
    gsap.from(projectNumber3, 2, {
      opacity: 0,
      x: -150,
      ease: Power3.easeOut,
      scrollTrigger: project2,
    });
  });

  return (
    <ProjectsWrapper id="projects">
      <ProjectTitle ref={(el) => (projectTitle = el)}>projects</ProjectTitle>
      <ProjectNumbers ref={(el) => (projectNumber = el)}>00</ProjectNumbers>
      <IndividualWrapper>
        <Project id="00" data-text="frkn" ref={(el) => (project0 = el)}>
          frkn
        </Project>
      </IndividualWrapper>
      <ProjectNumbers ref={(el) => (projectNumber2 = el)}>01</ProjectNumbers>
      <Project data-text="makimaki" ref={(el) => (project1 = el)}>
        makimaki
      </Project>
      <ProjectNumbers ref={(el) => (projectNumber3 = el)}>02</ProjectNumbers>
      <Project data-text="streamnow" ref={(el) => (project2 = el)}>
        streamnow
      </Project>
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

const IndividualWrapper = styled.div`
  position: relative;
`;

const ProjectTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 12.5rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px#8d89ff;

  margin-right: 40.5rem;

  opacity: 0.7;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }
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

  position: relative;
  display: inline-flex;

  color: transparent;
  -webkit-text-stroke: 1px #ececec;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    content: attr(data-text);
    transition: max-width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
    -webkit-text-fill-color: #ececec;
    max-width: 0;
  }

  &:hover:before {
    max-width: 100%;
  }
`;

const Frkn = styled.img``;
