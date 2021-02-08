import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

export default function freshfood() {
  return (
    <div>
      <Title>freshfood</Title>
      <LineDiv>
        <Line />
      </LineDiv>
      <InfoDiv>
        <InfoItem>Template | CMS</InfoItem>
        <InfoItem>2021</InfoItem>
        <InfoItem
          target="_blank"
          href="https://freshfood-cms.vercel.app/"
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
          href="https://github.com/furkandmrblk/freshfoodCMS"
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
          FreshFood is a website for any e-commerce shop with a minimalistic and
          trendy design. <br /> It also has a content management system.
          <br />
          <br />
          <span style={{ color: '#FF0000' }}>Problem:</span> A good looking &
          full functional website with a built in content management system. The
          system allows customers to easily change the content of the website.{' '}
          <br /> <br />
          Next.js, JavaScript, Styled-Components & Sanity.io
        </Text>
        <Img src="heroff.png" />
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Img src="aboutff.png" />
        <Text>
          This is the about section. The customer gets a quick overview about
          the company & what they stand for. All of the text seen can be changed
          with the content management system.
        </Text>
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Text>
          The product section is where the content management system shines the
          most. <br /> <br /> You can add as much products as you please. All of
          the components seen in the picture are changeable except the button.{' '}
          <br /> <br />
          As you add a new product the website automatically generates a
          individual page for the product. With this function you can tell the
          customer more about the product.
        </Text>
        <Img src="productsff.png" />
      </ShowcaseDiv>
      <ShowcaseDiv>
        <Img src="contactff.png" />
        <Text>
          At the bottom of the website you will find a contact section & the
          footer. <br /> Here you can find contact information about the
          company. All of these are also changeable with the content management
          system.
          <br /> <br /> The footer has three tags so customers can easily
          navigate through the website.
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
