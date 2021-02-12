import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

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
      <FooterCopyright>
        © 2021 <br /> furkandmrblk | Built with Next.js
      </FooterCopyright>
      <FooterImpressum>
        Impressum <br />
        Angaben gemäß § 5 TMG <br />
        Ibrahim-Furkan Demirbilek <br />
        Segitzdamm 22 <br />
        10969 Berlin <br />
        Kontakt <br />
        E-Mail: ibrahimdmrblk@outlook.de <br />
        <a href="/datenschutz" style={{ cursor: 'pointer', color: '#797979' }}>
          Datenschutzerklärung
        </a>
      </FooterImpressum>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% 10% 10% 10% 35%;
  grid-template-rows: 1px 70px 210px;
  grid-template-areas:
    'line line line line line'
    '. home work about logos'
    '. copyright . impressum .';
  align-items: center;
  justify-content: center;

  margin-top: 17.4375rem;

  @media ${maxdevice.tablet} {
    grid-template-columns: 10% 40% 40% 10%;
    grid-template-rows: 1px 55px 55px 55px 210px;
    grid-template-areas:
      '. line line .'
      '. home work .'
      '. about logos .'
      '. copyright copyright .'
      '. impressum impressum .';
  }
  @media ${maxdevice.mobileL} {
    margin-top: 12rem;
  }
`;

const FooterLine = styled.div`
  position: relative;
  height: 0;
  width: 60.6875rem;
  max-width: auto;
  border: 1px solid #ececec;

  grid-area: line;

  justify-self: center;

  @media ${maxdevice.laptop} {
    width: 40rem;
  }
  @media ${maxdevice.tablet} {
    border: 0.5px solid #ececec;
    width: 17rem;
  }
`;

const FooterHome = styled.a`
  font-size: 1rem;
  font-weight: 400;

  cursor: pointer;

  text-decoration: none;
  color: #ececec;

  grid-area: home;

  justify-self: center;

  transition: color 300ms ease-in-out;
  &:hover {
    color: #8d89ff;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;
const FooterWork = styled.a`
  font-size: 1rem;
  font-weight: 400;

  cursor: pointer;

  text-decoration: none;
  color: #ececec;

  grid-area: work;

  justify-self: center;

  transition: color 300ms ease-in-out;
  &:hover {
    color: #8d89ff;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;
const FooterAbout = styled.a`
  font-size: 1rem;
  font-weight: 400;

  cursor: pointer;

  grid-area: about;

  text-decoration: none;
  color: #ececec;

  justify-self: center;

  transition: color 300ms ease-in-out;
  &:hover {
    color: #8d89ff;
  }

  @media ${maxdevice.tablet} {
    text-align: center;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;
const FooterCopyright = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #797979;

  grid-area: copyright;

  justify-self: center;
  align-self: flex-start;

  @media ${maxdevice.tablet} {
    align-self: center;
    text-align: left;
  }
  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;

const FooterImpressum = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #797979;

  grid-area: impressum;

  justify-self: center;
  align-self: flex-start;

  @media ${maxdevice.tablet} {
    align-self: center;
    text-align: left;
  }
  @media ${maxdevice.mobileL} {
    font-size: 0.8rem;
  }
`;

const LinkedIn = styled.a`
  background-image: url('/linkedin.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.75rem;
  width: 2.6875rem;

  cursor: pointer;

  grid-area: logos;

  margin-left: 8.5rem;
  margin-top: 1rem;

  @media ${maxdevice.tablet} {
    height: 1.9rem;
    width: 1.9rem;

    margin-left: 6rem;
  }

  @media ${maxdevice.mobileL} {
    margin-left: 5rem;
  }
`;

const GitHub = styled.a`
  background-image: url('/github.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 2.734375rem;
  width: 2.6875rem;

  cursor: pointer;

  grid-area: logos;

  margin-left: 3rem;
  margin-top: 1rem;

  @media ${maxdevice.tablet} {
    height: 1.9rem;
    width: 1.9rem;

    margin-left: 1.5rem;
  }
`;
