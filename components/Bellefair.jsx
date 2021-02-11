import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

export default function bellefair() {
  return (
    <div>
      <Title>bellefair</Title>
      <LineDiv>
        <Line />
      </LineDiv>
      <InfoDiv>
        <InfoItem>Template | CMS</InfoItem>
        <InfoItem>2021</InfoItem>
        <InfoItem
          target="_blank"
          href="https://model-agency-one.vercel.app/"
          style={{
            color: '#28DF99',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Live Website
        </InfoItem>
        <InfoItem
          target="_blank"
          href="https://github.com/furkandmrblk/modelAgency"
          style={{
            color: '#28DF99',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          GitHub Repository
        </InfoItem>
      </InfoDiv>
      <ShowcaseDiv>
        <Text>
          Bellefair is a template for a model agency that I created because I
          liked the design. A CMS could be easily integrated into this project.
          <br />
          <br />
          <span style={{ color: '#FF0000' }}>Problem:</span> This could be a
          rebranding / redesign of an already existing website with a CMS system
          for easy usage. <br /> <br />
          Next.js, JavaScript, Styled-Components & Sanity.io
        </Text>
        <Img src="heroMA.PNG" />
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Img src="aboutMA.jpg" />
        <Text>
          This is the about section. The customer gets a quick overview about
          the company & what they stand for. All of the text seen can be changed
          with a content management system.
        </Text>
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Text>
          In this section you can show off your work. <br /> <br /> You can add
          as much photographs as you please. All of the components seen in the
          picture are changeable. <br /> <br />
        </Text>
        <Img src="workMA.jpg" />
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Img src="contactMA.jpg" />
        <Text>
          At the bottom of the website you will find a contact section & the
          footer. <br /> Here you can find contact information about the
          company.
          <br /> <br /> The footer has a very minimalistic design with just the
          logo because the navigation bar is moving with the page. So there is
          no need for extra tags.
        </Text>
      </ShowcaseDiv>
    </div>
  );
}

// Freshfood Title

const Title = styled.h1`
  font-size: 12.5rem;
  font-family: 'Racing Sans One', cursive;
  font-weight: 300;

  color: transparent;
  -webkit-text-stroke: 1px #ececec;

  text-align: center;

  margin-top: 5rem;

  cursor: default;

  transition: all 250ms ease-in-out;

  &:hover {
    -webkit-text-stroke: 1px #fff;
  }

  @media ${maxdevice.laptopL} {
    font-size: 11rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 8rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 4.7rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 4rem;
    -webkit-text-stroke: 0.5px #ececec;
  }
  @media ${maxdevice.mobileM} {
    font-size: 3.5rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 3rem;
  }
`;

// Freshfood Containers

const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 2.5rem;
  margin-bottom: 9.375rem;

  @media ${maxdevice.mobileL} {
    flex-direction: column;
    margin-bottom: 3.375rem;
  }
`;

const ShowcaseDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 10rem;

  @media ${maxdevice.laptopL} {
    flex-direction: column;
  }
`;

// Freshfood Items

const Line = styled.div`
  height: 0px;
  width: 105rem;

  border: 0.5px solid #fff;

  max-width: auto;
`;

const InfoItem = styled.a`
  font-size: 1.25rem;
  font-weight: 200;

  @media ${maxdevice.laptopL} {
    font-size: 1.1rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 0.8rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 0.7rem;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

const Text = styled.h1`
  font-size: 1.25rem;
  font-weight: 200;
  max-width: 30rem;

  @media ${maxdevice.laptopL} {
    font-size: 1.1rem;
  }

  @media ${maxdevice.laptopL} {
    order: 2;
    text-align: center;

    margin-top: 3rem;
  }

  @media ${maxdevice.tablet} {
    font-size: 0.8rem;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.7rem;
  }
`;

const Img = styled.img`
  object-fit: contain;
  border-radius: 1px;

  @media ${maxdevice.laptopL} {
    order: 1;
  }
  @media ${maxdevice.tablet} {
    width: 22rem;
  }
  @media ${maxdevice.mobileL} {
    width: 20rem;
  }
  @media ${maxdevice.mobileM} {
    width: 17rem;
  }
  @media ${maxdevice.mobileS} {
    width: 16rem;
  }
`;
