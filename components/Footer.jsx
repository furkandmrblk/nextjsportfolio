import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLine />
      <FooterHome href="/">Home</FooterHome>
      <FooterWork href="/#projects">Work</FooterWork>
      <FooterAbout href="/about">About</FooterAbout>
      <LinkedIn
        target="_blank"
        href="https://www.linkedin.com/in/ibrahim-furkan-demirbilek-a6a0421b6/"
      />
      <GitHub target="_blank" href="https://github.com/furkandmrblk" />
      <FooterCopyright>© 2021 - furkandmrblk</FooterCopyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% 10% 10% 10% 35%;
  grid-template-rows: 1px 55px 75px;
  grid-template-areas:
    'line line line line line'
    '. home work about logos'
    '. copyright copyright copyright .';
  align-items: center;
  justify-content: center;

  margin-top: 17.4375rem;
`;

const FooterLine = styled.div`
  position: relative;
  height: 0;
  width: 55.6875rem;
  border: 1px solid #ececec;

  grid-area: line;

  justify-self: center;
`;

const FooterHome = styled.a`
  font-size: 1rem;
  font-weight: 400;

  text-decoration: none;
  color: #ececec;

  grid-area: home;

  justify-self: center;
`;
const FooterWork = styled.a`
  font-size: 1rem;
  font-weight: 400;

  text-decoration: none;
  color: #ececec;

  grid-area: work;

  justify-self: center;
`;
const FooterAbout = styled.a`
  font-size: 1rem;
  font-weight: 400;

  grid-area: about;

  text-decoration: none;
  color: #ececec;

  justify-self: center;
`;
const FooterCopyright = styled.h1`
  font-size: 1rem;
  font-weight: 400;

  grid-area: copyright;

  justify-self: center;
  align-self: flex-end;
`;

const LinkedIn = styled.a`
  background-image: url('/linkedin.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.75rem;
  width: 2.6875rem;

  grid-area: logos;

  margin-left: 8.5rem;
  margin-top: 1rem;
`;

const GitHub = styled.a`
  background-image: url('/github.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.734375rem;
  width: 2.6875rem;

  grid-area: logos;

  margin-left: 3rem;
  margin-top: 1rem;
`;
