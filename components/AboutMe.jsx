import React from 'react';
import styled from 'styled-components';

export default function AboutMe() {
  return (
    <AboutWrapper>
      <AboutTitle>about me</AboutTitle>
      <AboutParagraph>
        My name is{' '}
        <span style={{ color: '#2C9487' }}>Ibrahim-Furkan Demirbilek.</span>
        <br />
        I’m <span style={{ color: '#5b56f4' }}>20 years old</span> & located in
        Berlin, Germany. <br />I am majoring in business administration & I am
        specializing in innovation management.
      </AboutParagraph>
      <AboutParagraph2>
        At the end of 2020 I quickly realized that I have <br />a passion for
        web development & web design.
        <br /> I am a self thaught web developer & I like to create my own
        designs.
      </AboutParagraph2>
      <AboutParagraph3>
        Wanna know more about me? <br />
        Feel free to visit my LinkedIn & GitHub!
      </AboutParagraph3>
      <LogoWrapper>
        <LinkedIn
          target="_blank"
          href="https://www.linkedin.com/in/ibrahim-furkan-demirbilek-a6a0421b6/"
        />
        <GitHub target="_blank" href="https://github.com/furkandmrblk" />
      </LogoWrapper>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5.7rem;
`;

const AboutTitle = styled.h1`
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

const AboutParagraph = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;

  max-width: 29.625rem;
  margin-top: 10.625rem;
`;

const AboutParagraph2 = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;

  max-width: 29.625rem;
  margin-top: 2.5rem;
`;
const AboutParagraph3 = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;

  max-width: 29.625rem;
  margin-top: 2.5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 3.125rem;
  width: 8.5rem;

  margin-top: 2.5rem;
`;

const LinkedIn = styled.a`
  background-image: url('/linkedin.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.75rem;
  width: 2.6875rem;

  cursor: none;
`;

const GitHub = styled.a`
  background-image: url('/github.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.734375rem;
  width: 2.6875rem;

  cursor: none;
`;
