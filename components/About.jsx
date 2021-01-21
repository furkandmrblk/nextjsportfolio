import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <AboutWrapper>
      <AboutTitle>Wanna know more about me?</AboutTitle>
      <AboutButton href="/about">about me</AboutButton>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 23.4375rem;
`;

const AboutTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 400;

  color: #8d89ff;
`;

const AboutButton = styled.a`
  padding: 0.8375rem 2.775rem;
  border-radius: 1.875rem;
  border: none;

  background-color: #8d89ff;
  color: #fff;

  font-size: 1.2rem;
  font-weight: 500;

  margin-top: 5.1875rem;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #7672eb;
  }
`;
