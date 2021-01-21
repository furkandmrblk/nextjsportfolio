import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Projects() {
  const showImage = () => {
    var ImageFrkn = document.getElementById('frkn');
    var FrknProject = document.getElementById('00');

    FrknProject.onmouseover = function () {
      ImageFrkn.style.display = 'block';
    };

    FrknProject.addEventListener('mousemove', function (e) {
      ImageFrkn.style.positionX = -e.offsetX + 'px';
      ImageFrkn.style.positionY = -e.offsetY + 'px';
      console.log(e);
    });

    FrknProject.onmouseout = function () {
      ImageFrkn.style.display = 'none';
    };
  };

  return (
    <ProjectsWrapper id="projects">
      <ProjectTitle>projects</ProjectTitle>
      <ProjectNumbers>00</ProjectNumbers>
      <IndividualWrapper onMouseOver={showImage}>
        <Frkn id="frkn" src="frkn.PNG" alt="frkn" />
        <Project id="00" data-text="frkn">
          frkn
        </Project>
      </IndividualWrapper>
      <ProjectNumbers>01</ProjectNumbers>
      <Project data-text="makimaki">makimaki</Project>
      <ProjectNumbers>02</ProjectNumbers>
      <Project data-text="streamnow">streamnow</Project>
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

const Frkn = styled.img`
  position: absolute;

  z-index: 100;

  height: 350px;
  width: 600px;

  border: 0.5px solid #393e46;
  border-radius: 2px;

  display: none;
  margin-left: 20rem;
`;
