import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <SphereWrapper>
          <Sphere style={{ backgroundColor: '#5B56F4' }} />
          <Sphere style={{ backgroundColor: '#fff', marginTop: '7rem' }} />
          <Sphere style={{ backgroundColor: '#2C9487', marginTop: '14rem' }} />
        </SphereWrapper>
        <HeroTextWrapper>
          <HeroText>
            A web developer that will{' '}
            <span style={{ fontWeight: '600' }}>grow your brand</span> & get you
            <span style={{ fontWeight: '600' }}> results</span>.
          </HeroText>
          <HeroButton>Contact Me</HeroButton>
        </HeroTextWrapper>
      </HeroWrapper>
      <SubHeroWrapper>
        <SubHeroLine1 data-text="<> Unique.">{'<>'} Unique. </SubHeroLine1>
        <SubHeroLine2 data-text=" Unparalleled."> Unparalleled.</SubHeroLine2>
      </SubHeroWrapper>
      <SubHeroWrapper2>
        <SubHeroLine2 data-text="<> Unique.">{'<>'} Unique. </SubHeroLine2>
        <SubHeroLine1 data-text=" Unparalleled."> Unparalleled.</SubHeroLine1>
      </SubHeroWrapper2>
    </>
  );
}

const SubHeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 5.7rem;
`;
const SubHeroWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: -3rem;
`;

const HeroWrapper = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 7rem;
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
`;

const HeroButton = styled.button`
  padding: 0.9375rem 2.875rem;
  border-radius: 1.875rem;
  border: none;

  background-color: #2c9487;
  color: #fff;

  font-size: 1.25rem;
  font-weight: 500;

  margin-bottom: -6rem;
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
