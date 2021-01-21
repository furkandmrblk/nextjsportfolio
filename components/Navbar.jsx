import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);

    if (open === true) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <HeaderContainer>
      <Nav open={open} id="home">
        <Logo href="/">furkan</Logo>
        <HamburgerWrap onClick={openMenu}>
          <MenuLink>menu</MenuLink>
          <HamburgerLineWrap>
            <MenuLinkLine />
            <MenuLinkLine2 />
          </HamburgerLineWrap>
        </HamburgerWrap>
      </Nav>
      <Menu open={open}>
        <MenuBG open={open} />
        <MenuSideWrapper>
          <MenuSideNumber>00</MenuSideNumber>
          <MenuItems href="/about" data-text="About">
            {' '}
            About
          </MenuItems>
        </MenuSideWrapper>
        <MenuSideWrapper>
          <MenuSideNumber>01</MenuSideNumber>
          <MenuItems onClick={openMenu} href="/#projects" data-text="Projects">
            {' '}
            Projects
          </MenuItems>
        </MenuSideWrapper>
        <MenuSideWrapper>
          <MenuSideNumber>02</MenuSideNumber>
          <MenuItems onClick={openMenu} href="/#contact" data-text="Contact">
            {' '}
            Contact
          </MenuItems>
        </MenuSideWrapper>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Nav = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 33.3% 33.4% 33%;
  grid-template-areas: '. logo menu';
  width: 100%;

  background-color: ${({ open }) => (open ? ' #14141c' : 'transparent')};
`;

const Logo = styled.a`
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 0.3px #fff;

  justify-self: center;
  align-self: center;
  grid-area: logo;

  cursor: default;
`;

const HamburgerLineWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MenuLink = styled.h1`
  position: relative;
  font-size: 1.375rem;
  font-weight: 200;

  justify-self: center;
  align-self: center;

  grid-area: menu;
`;

const MenuLinkLine = styled.span`
  position: relative;
  height: 0px;
  width: 2rem;

  margin-left: 0.4rem;
  margin-bottom: 0.2925rem;

  border: 1px solid #fff;
  border-radius: 5px;
`;

const hamburgerAnimation = keyframes`
      0% {
        width: 1.2rem;
      }
      50% {
        width: 2rem;
      }
      100% {
        width: 1.2rem;
      }

`;

const MenuLinkLine2 = styled.span`
  position: relative;
  height: 0px;
  width: 1.2rem;

  margin-bottom: -0.1rem;
  margin-left: 0.4rem;

  border: 1px solid #fff;
  border-radius: 5px;
`;

const HamburgerWrap = styled.a`
  margin: 0 9rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  grid-area: menu;

  cursor: default;

  &:hover ${MenuLinkLine2} {
    animation-name: ${hamburgerAnimation};
    animation-duration: 700ms;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
`;

const Menu = styled.div`
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow: hidden;

  height: 100%;

  width: ${({ open }) => (open ? '100vw' : '0')};

  transition: all 1s ease-in-out;
`;

const MenuBG = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  min-width: ${({ open }) => (open ? '100vw' : '0')};
  background: #14141c;

  transition: all 1s ease-in-out;
  z-index: 1000;
`;

const MenuItems = styled.a`
  position: relative;
  display: inline-flex;
  font-size: 10rem;
  font-weight: 900;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.5px #ececec;
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

  &:first-child {
    margin-top: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: -1.5rem;
  }

  &:hover:before {
    max-width: 100%;
  }
`;

const MenuSideWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1100;
`;

const MenuSideNumber = styled.span`
  position: relative;
  display: inline-flex;

  font-size: 3rem;
  font-weight: 900;
  margin-right: 2rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.5px #ececec;

  text-align: center;
  transform: rotate(-90deg);
`;
