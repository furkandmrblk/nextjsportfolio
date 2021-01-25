import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { maxdevice } from '../theme/mediaQueries';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [close, setClose] = useState(false);
  const [close2, setClose2] = useState(false);

  const closeModal = () => {
    setClose(!close);

    if (close === true) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };
  const closeModal2 = () => {
    setClose2(!close2);

    if (close2 === true) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

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
      <Wrapper>
        <ProjectNumbers ref={(el) => (projectNumber = el)}>00</ProjectNumbers>
        <Modal close={close}>
          <CloseModal onClick={closeModal} />
          <ModalContent>
            <ModalTitle>frkn</ModalTitle>
            <ModalNumber>00</ModalNumber>
            <ModalDescriptionWrapper>
              <ModalDescription>
                This is my first project that I created all by myself. <br />
                It is also my first ever portfolio that I designed and
                published. <br />
                <br />
                The entire design was done by me in{' '}
                <span style={{ color: '#F9A826' }}>Figma</span>.
                <br />
                Afterwards I built this project with{' '}
                <span style={{ color: '#61DBFB' }}>React.js</span> & I used
                <span style={{ color: '#F54291' }}> styled-components</span>.
              </ModalDescription>
              <ModalHrefs
                target="_blank"
                href="https://furkandmrblk.netlify.app/"
              >
                Visit The{' '}
                <span style={{ color: '#28DF99', textDecoration: 'underline' }}>
                  Live Website
                </span>
                !
              </ModalHrefs>
              <ModalHrefs
                target="_blank"
                href="https://github.com/furkandmrblk/myportfolio"
              >
                Visit The{' '}
                <span style={{ color: '#28DF99', textDecoration: 'underline' }}>
                  GitHub Repository
                </span>
                !
              </ModalHrefs>
            </ModalDescriptionWrapper>
            <ModalProject src="/portfolio0.png" />
            <ModalProject src="/aboutportfolio.png" />
          </ModalContent>
        </Modal>
        <IndividualWrapper id="projectzero">
          <Project
            id="00"
            data-text="frkn"
            ref={(el) => (project0 = el)}
            onClick={closeModal}
          >
            frkn
          </Project>
        </IndividualWrapper>
        <ProjectNumbers ref={(el) => (projectNumber2 = el)}>01</ProjectNumbers>
        <Modal2 close2={close2}>
          <CloseModal onClick={closeModal2} />
          <ModalContent>
            <ModalTitle>makimaki</ModalTitle>
            <ModalNumber>01</ModalNumber>
            <ModalDescriptionWrapper>
              <ModalDescription>
                This is a template for an asian restaurant. <br /> For this
                project I used{' '}
                <span style={{ color: '#61DBFB' }}>React.js</span> and{' '}
                <span style={{ color: '#F54291' }}> SCSS</span> for the styling.{' '}
                <br />
              </ModalDescription>
              <ModalHrefs target="_blank" href="https://makimaki.netlify.app/">
                Visit The{' '}
                <span style={{ color: '#28DF99', textDecoration: 'underline' }}>
                  Live Website
                </span>
                !
              </ModalHrefs>
              <ModalHrefs
                target="_blank"
                href="https://github.com/furkandmrblk/makimaki"
              >
                Visit The{' '}
                <span style={{ color: '#28DF99', textDecoration: 'underline' }}>
                  GitHub Repository
                </span>
                !
              </ModalHrefs>
            </ModalDescriptionWrapper>
            <ModalProject src="/makimakifull.png" alt="makimaki" />
            <ModalProject src="/makimakimenü.png" alt="makimakimenü" />
          </ModalContent>
        </Modal2>
        <IndividualWrapper id="projectone">
          <Project
            data-text="makimaki"
            ref={(el) => (project1 = el)}
            onClick={closeModal2}
          >
            makimaki
          </Project>
        </IndividualWrapper>
        <ProjectNumbers ref={(el) => (projectNumber3 = el)}>02</ProjectNumbers>
        <Project data-text="coming soon ..." ref={(el) => (project2 = el)}>
          coming soon ...
        </Project>
      </Wrapper>
    </ProjectsWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7.25rem;

  @media ${maxdevice.mobileM} {
    margin-top: 5rem;
  }
`;

const ProjectsWrapper = styled.div`
  margin-top: 23.4375rem;
`;

const IndividualWrapper = styled.div`
  display: block;
  position: relative;
`;

const ProjectTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 12.5rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px#8d89ff;

  margin-right: 40.5rem;

  cursor: default;

  opacity: 0.7;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media ${maxdevice.desktopL} {
    font-size: 9.9rem;
  }

  @media ${maxdevice.laptopL} {
    font-size: 7.3rem;
  }
  @media ${maxdevice.laptopS} {
    font-size: 6rem;
    margin-right: 30rem;
  }
  @media ${maxdevice.laptop} {
    margin-right: 15rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 3.5rem;
    margin-right: 0;
    text-align: center;
  }
  @media ${maxdevice.mobileM} {
    font-size: 3rem;
  }
`;

const ProjectNumbers = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 6.25rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px #8d89ff;

  @media ${maxdevice.desktopL} {
    font-size: 5rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 4rem;
  }
  @media ${maxdevice.laptopS} {
    font-size: 2.4rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 2rem;
  }
`;

const Project = styled.a`
  font-family: 'Racing Sans One', cursive;
  font-size: 9.25rem;

  position: relative;
  display: inline-flex;

  cursor: none;

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

  @media ${maxdevice.desktopL} {
    font-size: 7.3rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 6.5rem;
  }
  @media ${maxdevice.laptopS} {
    -webkit-text-stroke: 0.5px #ececec;
    font-size: 4rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 3rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 2.38rem;
  }
  @media ${maxdevice.mobileM} {
    text-align: center;
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
      max-width: 0;
    }
  }
`;
const Modal = styled.div`
  z-index: 1300;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 758px;
  max-height: 100%;
  width: 1200px;
  max-width: 100%;

  background-color: #1c1c2b;
  border-radius: 5px;

  margin-top: 2rem;

  display: ${({ close }) => (close ? 'visible' : 'none')};

  @media ${maxdevice.laptopL} {
    height: 583px;
    width: 950px;
  }
  @media ${maxdevice.laptop} {
    height: 448px;
    width: 710px;
  }
  @media ${maxdevice.mobileL} {
    height: 450px;
    width: 280px;
  }
`;

const Modal2 = styled.div`
  z-index: 1300;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 758px;
  max-height: 100%;
  width: 1200px;
  max-width: 100%;

  background-color: #1c1c2b;
  border-radius: 5px;

  margin-top: 2rem;

  display: ${({ close2 }) => (close2 ? 'visible' : 'none')};

  @media ${maxdevice.laptopL} {
    height: 583px;
    width: 950px;
  }
  @media ${maxdevice.laptop} {
    height: 448px;
    width: 710px;
  }

  @media ${maxdevice.mobileL} {
    height: 450px;
    width: 280px;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1c1c2b;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 20px 50px 20px 20px;

  overflow-y: auto;
`;

const CloseModal = styled.div`
  position: absolute;

  z-index: 1301;

  background-image: url('/Close.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 20px;
  width: 20px;

  margin-top: 1.5rem;
  margin-left: 70.5rem;

  @media ${maxdevice.laptopL} {
    margin-left: 56rem;
  }
  @media ${maxdevice.laptop} {
    margin-left: 41rem;
  }
  @media ${maxdevice.mobileL} {
    margin-left: 15rem;
  }
`;

const ModalTitle = styled.h1`
  font-family: 'Racing Sans One', cursive;
  font-weight: 300;
  font-size: 65px;

  @media ${maxdevice.mobileL} {
    font-size: 30px;
  }
`;

const ModalNumber = styled.h1`
  font-family: 'Racing Sans One', cursive;
  font-weight: 300;
  font-size: 30px;

  @media ${maxdevice.mobileL} {
    font-size: 20px;
  }
`;

const ModalDescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 53rem;

  @media ${maxdevice.mobileL} {
    width: 100%;
  }
`;

const ModalDescription = styled.h1`
  font-size: 1.2rem;
  font-weight: 200;

  max-width: 830px;

  margin-top: 3rem;

  @media ${maxdevice.laptop} {
    text-align: center;
    font-size: 1rem;

    max-width: 100%;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;

const ModalHrefs = styled.a`
  font-size: 1.2rem;
  font-weight: 200;

  text-decoration: none;
  color: #ececec;
  cursor: pointer;

  margin-top: 1.5rem;

  @media ${maxdevice.laptop} {
    text-align: center;
    font-size: 1rem;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;

    max-width: 100%;
  }
`;

const ModalProject = styled.img`
  width: 850px;

  object-fit: contain;

  margin-top: 3rem;

  @media ${maxdevice.laptop} {
    width: 570px;
  }
  @media ${maxdevice.mobileL} {
    width: 100%;
  }
`;
