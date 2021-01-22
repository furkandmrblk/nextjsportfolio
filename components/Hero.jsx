import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { TweenMax, Power3, Power2, Power4 } from 'gsap';

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
          <Sphere
            ref={(el) => (circlePurple = el)}
            style={{ backgroundColor: '#5B56F4' }}
          />
          <Sphere
            ref={(el) => (circleWhite = el)}
            style={{ backgroundColor: '#fff', marginTop: '7rem' }}
          />
          <Sphere
            ref={(el) => (circleGreen = el)}
            style={{ backgroundColor: '#2C9487', marginTop: '14rem' }}
          />
        </SphereWrapper>
        <HeroTextWrapper>
          <HeroText ref={(el) => (heroText = el)}>
            A web developer that will{' '}
            <span style={{ fontWeight: '600' }}>grow your brand</span> & get you
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
`;
const SubHeroWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: -3.5rem;
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
`;

const SphereWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 250px;
  width: 195px;
`;

const Sphere = styled.div`
  position: absolute;
  display: block;
  height: 6.975rem;
  width: 6.975rem;

  border-radius: 50%;
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
`;

const HeroButton = styled.a`
  padding: 0.8375rem 2.775rem;
  border-radius: 1.875rem;
  border: none;

  background-color: #2c9487;
  color: #fff;

  font-size: 1.2rem;
  font-weight: 500;

  margin-bottom: -1.2rem;

  transition: background-color 250ms ease-in-out;

  opacity: 0;

  &:hover {
    background-color: #22796f;
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
`;
