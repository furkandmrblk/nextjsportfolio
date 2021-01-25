import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';
import { TweenMax, Power3, Power2 } from 'gsap';

export default function Hero() {
  let heroText = useRef(null);
  let heroButton = useRef(null);

  let circlePurple = useRef(null);
  let circleWhite = useRef(null);
  let circleGreen = useRef(null);

  let heroSubtitle = useRef(null);
  let heroSubtitle2 = useRef(null);
  let heroSubtitle3 = useRef(null);
  let heroSubtitle4 = useRef(null);

  useEffect(() => {
    TweenMax.from(circlePurple, 1, {
      opacity: 0,
      x: -350,
      ease: Power3.easeOut,
    });
    TweenMax.from(circleWhite, 1.2, {
      opacity: 0.5,
      x: -380,
      ease: Power3.easeOut,
    });
    TweenMax.from(circleGreen, 1.4, {
      opacity: 0.9,
      x: -410,
      ease: Power3.easeOut,
    });
    TweenMax.staggerFrom([heroSubtitle, heroSubtitle2], 1.5, {
      opacity: 0,
      x: -700,
      ease: Power3.easeOut,
    });
    TweenMax.staggerFrom([heroSubtitle3, heroSubtitle4], 1.5, {
      opacity: 0,
      x: 700,
      ease: Power3.easeOut,
    });
    TweenMax.to([heroText, heroButton], 1.1, {
      opacity: 1,
      y: 40,
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <>
      <HeroWrapper>
        <SphereWrapper>
          <Sphere1
            ref={(el) => (circlePurple = el)}
            style={{ backgroundColor: '#5B56F4' }}
          />
          <Sphere2
            ref={(el) => (circleWhite = el)}
            style={{ backgroundColor: '#fff' }}
          />
          <Sphere3
            ref={(el) => (circleGreen = el)}
            style={{ backgroundColor: '#2C9487' }}
          />
        </SphereWrapper>
        <HeroTextWrapper>
          <HeroText ref={(el) => (heroText = el)}>
            A web developer that will{' '}
            <span style={{ fontWeight: '600' }}>
              grow <br /> your brand
            </span>{' '}
            & get you
            <span style={{ fontWeight: '600' }}> results</span>.
          </HeroText>
          <HeroButton
            ref={(el) => (heroButton = el)}
            type="submit"
            value="Send Email"
            href="mailto:ibrahimdmrblk@outlook.de"
          >
            Contact Me
          </HeroButton>
        </HeroTextWrapper>
      </HeroWrapper>
      <SubHeroWrapper>
        <SubHeroLine1 ref={(el) => (heroSubtitle = el)} data-text="<> Unique.">
          {'<>'} Unique.{' '}
        </SubHeroLine1>
        <SubHeroLine2
          ref={(el) => (heroSubtitle2 = el)}
          data-text=" Unparalleled."
        >
          {' '}
          Unparalleled.
        </SubHeroLine2>
      </SubHeroWrapper>
      <SubHeroWrapper2>
        <SubHeroLine2 ref={(el) => (heroSubtitle3 = el)} data-text="<> Unique.">
          {'<>'} Unique.{' '}
        </SubHeroLine2>
        <SubHeroLine1
          ref={(el) => (heroSubtitle4 = el)}
          data-text=" Unparalleled."
        >
          {' '}
          Unparalleled.
        </SubHeroLine1>
      </SubHeroWrapper2>
    </>
  );
}

const SubHeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 8rem;

  @media ${maxdevice.tablet} {
    margin-top: 5rem;
  }
  @media ${maxdevice.mobileL} {
    flex-wrap: wrap;
  }
`;
const SubHeroWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: -3.5rem;

  @media ${maxdevice.laptopL} {
    margin-top: -2.9rem;
  }
  @media ${maxdevice.laptopS} {
    margin-top: -2.4rem;
  }
  @media ${maxdevice.laptop} {
    margin-top: -1.5rem;
  }
  @media ${maxdevice.tablet} {
    margin-top: 0rem;
  }
  @media ${maxdevice.mobileL} {
    flex-wrap: wrap;
  }
`;

const HeroWrapper = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 9.5rem;
  margin-right: 40.5rem;
  @media ${maxdevice.desktop} {
    margin-right: 40.5rem;
  }
  @media ${maxdevice.desktopL} {
    margin-right: 20rem;
  }
  @media ${maxdevice.laptopS} {
    margin-right: 15rem;
  }
  @media ${maxdevice.laptop} {
    margin-right: 8rem;
  }
  @media ${maxdevice.tablet} {
    margin-top: 4rem;
    margin-right: 0rem;
  }
`;

const SphereWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 250px;
  width: 195px;

  @media ${maxdevice.desktopL} {
    margin-left: -10rem;
  }
  @media ${maxdevice.desktopS} {
    margin-left: 0rem;
  }
  @media ${maxdevice.laptopS} {
    margin-left: -4rem;
    width: 145px;
  }
  @media ${maxdevice.tablet} {
    margin-left: 0rem;
    width: 100px;
  }
  @media ${maxdevice.mobileL} {
    width: 70px;
  }
  @media ${maxdevice.mobileM} {
    width: 60px;
  }
`;

const Sphere1 = styled.div`
  position: absolute;
  display: block;
  height: 6.975rem;
  width: 6.975rem;

  border-radius: 50%;

  @media ${maxdevice.laptopS} {
    height: 6rem;
    width: 6rem;
  }

  @media ${maxdevice.laptop} {
    height: 4.5rem;
    width: 4.5rem;
  }
  @media ${maxdevice.tablet} {
    height: 4rem;
    width: 4rem;
  }
  @media ${maxdevice.mobileL} {
    height: 3.5rem;
    width: 3.5rem;
  }
  @media ${maxdevice.mobileM} {
    height: 3rem;
    width: 3rem;
  }
`;

const Sphere2 = styled.div`
  position: absolute;
  display: block;
  height: 6.975rem;
  width: 6.975rem;

  border-radius: 50%;

  margin-top: 7rem;

  @media ${maxdevice.laptopS} {
    height: 6rem;
    width: 6rem;
  }
  @media ${maxdevice.laptop} {
    margin-top: 5.5rem;
    height: 4.5rem;
    width: 4.5rem;
  }
  @media ${maxdevice.tablet} {
    height: 4rem;
    width: 4rem;
  }
  @media ${maxdevice.mobileL} {
    height: 3.5rem;
    width: 3.5rem;

    margin-top: 5rem;
  }
  @media ${maxdevice.mobileM} {
    height: 3rem;
    width: 3rem;

    margin-top: 4.3rem;
  }
`;

const Sphere3 = styled.div`
  position: absolute;
  display: block;
  height: 6.975rem;
  width: 6.975rem;

  border-radius: 50%;

  margin-top: 14rem;

  @media ${maxdevice.laptopS} {
    height: 6rem;
    width: 6rem;
  }
  @media ${maxdevice.laptop} {
    margin-top: 11rem;
    height: 4.5rem;
    width: 4.5rem;
  }
  @media ${maxdevice.tablet} {
    height: 4rem;
    width: 4rem;
  }
  @media ${maxdevice.mobileL} {
    height: 3.5rem;
    width: 3.5rem;

    margin-top: 10rem;
  }
  @media ${maxdevice.mobileM} {
    height: 3rem;
    width: 3rem;

    margin-top: 8.6rem;
  }
`;

const HeroTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const HeroText = styled.h1`
  font-size: 2.1875rem;
  font-weight: 200;

  max-width: 39.875rem;

  margin-bottom: 4.5rem;

  opacity: 0;
  @media ${maxdevice.laptopL} {
    font-size: 2rem;
  }

  @media ${maxdevice.laptopS} {
    font-size: 1.5rem;
    margin-bottom: 5.2rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.2rem;

    margin-bottom: 4rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 0.88rem;

    margin-bottom: 3.3rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 0.7rem;
  }
`;

const HeroButton = styled.a`
  padding: 0.8375rem 2.775rem;
  border-radius: 1.875rem;
  border: none;

  background-color: #2c9487;
  color: #fff;

  font-size: 1.2rem;
  font-weight: 500;

  cursor: pointer;

  margin-bottom: -1.2rem;

  transition: background-color 250ms ease-in-out;

  opacity: 0;

  &:hover {
    background-color: #22796f;
  }

  @media ${maxdevice.laptopS} {
    padding: 0.7175rem 2.475rem;
    font-size: 1.1rem;
  }

  @media ${maxdevice.laptop} {
    padding: 0.7175rem 1.975rem;
    font-size: 0.7rem;
    margin-bottom: 0rem;
  }
  @media ${maxdevice.tablet} {
    padding: 0.7175rem 1.975rem;
    font-size: 0.7rem;
  }
  @media ${maxdevice.mobileL} {
    padding: 0.4175rem 1.875rem;
    font-size: 0.7rem;
  }
  @media ${maxdevice.mobileM} {
    padding: 0.3175rem 1.675rem;
    font-size: 0.6rem;
    margin-bottom: 0.9rem;
  }
`;

const SubHeroLine1 = styled.h1`
  position: relative;
  display: inline-flex;

  font-size: 8rem;
  font-weight: 500;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 2px #2c9487;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    content: attr(data-text);
    transition: max-width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
    -webkit-text-fill-color: #2c9487;
    max-width: 0;
  }

  &:hover:before {
    max-width: 100%;
  }

  @media ${maxdevice.desktopL} {
    font-size: 6.32rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 5.1rem;
    -webkit-text-stroke: 1.5px #2c9487;
  }
  @media ${maxdevice.laptopS} {
    font-size: 4.1rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 3.4rem;
  }
  @media ${maxdevice.tablet} {
    -webkit-text-stroke: 1px #2c9487;
    font-size: 1.63rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 2.6rem;
    margin-bottom: -0.8rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 2.1rem;
  }
`;
const SubHeroLine2 = styled.h1`
  position: relative;
  display: inline-flex;

  font-size: 8rem;
  font-weight: 500;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 2px #5b56f4;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    content: attr(data-text);
    transition: max-width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
    -webkit-text-fill-color: #5b56f4;
    max-width: 0;
  }

  &:hover:before {
    max-width: 100%;
  }

  @media ${maxdevice.desktopL} {
    font-size: 6.32rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 5.1rem;
    -webkit-text-stroke: 1.5px #5b56f4;
  }
  @media ${maxdevice.laptopS} {
    font-size: 4.1rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 3.4rem;
  }
  @media ${maxdevice.tablet} {
    -webkit-text-stroke: 1px #5b56f4;
    font-size: 1.63rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 2.6rem;
    margin-bottom: -0.8rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 2.1rem;
  }
`;
