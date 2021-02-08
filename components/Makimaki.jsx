import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

export default function makimaki() {
  return (
    <div>
      <MakiTitle>makimaki</MakiTitle>
      <MakiLineDiv>
        <MakiLine />
      </MakiLineDiv>
      <MakiInfoDiv>
        <MakiInfoItem>Template</MakiInfoItem>
        <MakiInfoItem>2020</MakiInfoItem>
        <MakiInfoItem
          target="_blank"
          href="https://makimaki.netlify.app/"
          style={{
            color: '#28DF99',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Live Website
        </MakiInfoItem>
        <MakiInfoItem
          target="_blank"
          href="https://github.com/furkandmrblk/makimaki"
          style={{
            color: '#28DF99',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          GitHub Repository
        </MakiInfoItem>
      </MakiInfoDiv>
      <MakiShowcaseDiv>
        <MakiText>
          MakiMaki is a website for asian cuisine restaurants. <br />
          <br />
          <span style={{ color: '#FF0000' }}>Problem:</span> Many asian
          restaurants in my local area have websites that are outdated & not
          functional. <br /> <br /> <br /> <br />
          React.js, JavaScript & SCSS
        </MakiText>
        <MakiImg src="hero.png" />
      </MakiShowcaseDiv>
      <MakiShowcaseDiv>
        <MakiImg src="info.png" />
        <MakiText>
          This section comes directly after the hero. It quickly shows the
          customer what kind of food they can expect from the restaurant with a
          short description. <br /> It could also function as a little blog
          section for food articles.
        </MakiText>
      </MakiShowcaseDiv>
      <MakiShowcaseDiv>
        <MakiText>
          After the short introduction about the food that the restaurant sells,
          the customer is confronted with contact information such as the adress
          & the opening hours.
        </MakiText>
        <MakiImg src="contact.png" />
      </MakiShowcaseDiv>
      <MakiShowcaseDiv>
        <MakiImg src="cta.png" />
        <MakiText>
          At the end there is another call to action button which is placed
          infront of a delicious sushi image. The customer now has the option to
          order food from the place. <br /> <br /> The footer has also two call
          to action buttons. One for calling the place & one more to order food.
          The customer also can navigate through the website with the tags at
          the footer.
        </MakiText>
      </MakiShowcaseDiv>
      <MakiShowcaseDiv>
        <MakiText>
          The menu gives the customer a more information about what the
          restaurant sells and how much each item costs individually. <br />{' '}
          <br />I kept the design elegant so it has a clean look & I highlighted
          the items with a light orange color so the customer can quickly find
          each item.
        </MakiText>
        <MakiImg src="menu.png" />
      </MakiShowcaseDiv>
    </div>
  );
}

// MakiMaki Title

const MakiTitle = styled.h1`
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

// MakiMaki Containers

const MakiLineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MakiInfoDiv = styled.div`
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

const MakiShowcaseDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 10rem;

  @media ${maxdevice.laptopL} {
    flex-direction: column;
  }
`;

// MakiMaki Items

const MakiLine = styled.div`
  height: 0px;
  width: 105rem;

  border: 0.5px solid #fff;

  max-width: auto;
`;

const MakiInfoItem = styled.a`
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

const MakiText = styled.h1`
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

const MakiImg = styled.img`
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
