import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

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
      <Nav open={open}>
        <Spaceholder>spaceholder</Spaceholder>
        <Logo href="/" data-text="furkan">
          furkan
        </Logo>
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
  z-index: 1200;
  position: fixed;
  width: 88%;
  display: flex;
  align-content: center;
  justify-content: space-between;

  transition: background-color 1.15s cubic-bezier(1, 0, 0.37, 0.37);

  background-color: ${({ open }) => (open ? '#14141c' : 'transparent')};

  margin-top: -2.1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #14141c;

    display: ${({ open }) => (open ? '' : 'none')};
    min-width: ${({ open }) => (open ? '100vw' : '0')};
  }
`;

const Logo = styled.a`
  position: relative;
  font-family: 'Racing Sans One', cursive;
  font-size: 2.5rem;
  font-weight: 300;

  color: transparent;
  -webkit-text-stroke: 0.5px #ececec;

  margin-top: 2.125rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    content: attr(data-text);
    transition: max-height 500ms ease-in-out;
    -webkit-text-fill-color: #ececec;
    max-height: 0;
  }

  &:hover:before {
    max-height: 100%;
  }

  @media ${maxdevice.tablet} {
    font-size: 2rem;
    margin-left: 2.125rem;
  }
  @media ${maxdevice.mobileL} {
    margin-left: 0;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.5rem;
  }
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

  @media ${maxdevice.tablet} {
    font-size: 1.1rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1rem;
  }
`;

const MenuLinkLine = styled.span`
  position: relative;
  height: 0px;
  width: 2rem;

  margin-left: 0.4rem;
  margin-bottom: 0.2925rem;

  border: 1px solid #fff;
  border-radius: 5px;

  @media ${maxdevice.mobileM} {
    width: 1.5rem;
  }
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

  @media ${maxdevice.mobileM} {
    width: 1.1rem;
  }
`;

const HamburgerWrap = styled.a`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 7rem;
  margin-top: 2.125rem;

  cursor: pointer;

  &:hover ${MenuLinkLine2} {
    animation-name: ${hamburgerAnimation};
    animation-duration: 700ms;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  @media ${maxdevice.laptop} {
    margin-right: 5rem;
  }
  @media ${maxdevice.mobileL} {
    margin-right: 2.98125rem;
  }
  @media ${maxdevice.mobileM} {
    &:hover ${MenuLinkLine2} {
      animation: none;
    }
  }
`;

const Spaceholder = styled.a`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  -webkit-text-fill-color: transparent;
  -webkit-user-select: none;
  cursor: none;
  padding-left: 7rem;
  padding-top: 2.125rem;

  @media ${maxdevice.laptop} {
    padding-left: 5rem;
  }
  @media ${maxdevice.tablet} {
    display: none;
  }
  @media ${maxdevice.mobileL} {
    display: none;
  }
`;

const Menu = styled.div`
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 2rem;

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

  cursor: pointer;

  margin-top: 2rem;

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

  @media ${maxdevice.laptopL} {
    font-size: 7rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 4rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 3rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 2.5rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 2rem;
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

  @media ${maxdevice.laptopL} {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;
