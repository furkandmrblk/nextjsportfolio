import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  let contactTitle = useRef(null);

  useEffect(() => {
    gsap.from(contactTitle, 1.8, {
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      scrollTrigger: contactTitle,
    });
  });

  return (
    <ContactWrapper id="contact">
      <ContactTitle>contact</ContactTitle>
      <ContactSubtitle ref={(el) => (contactTitle = el)}>
        Interested? Contact Me!
      </ContactSubtitle>
      <ContactFormWrapper>
        <ContactForm>
          <EmailForm placeholder="e-mail" />
          <NameForm placeholder="name" />
          <FormButton>send</FormButton>
        </ContactForm>
        <ContactFormArea />
      </ContactFormWrapper>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 23.4375rem;
`;

const ContactTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 12.5rem;
  font-weight: 900;

  color: transparent;
  -webkit-text-stroke: 1px #2c9487;

  margin-left: 40.5rem;

  opacity: 0.7;
  transition: all 250ms ease-in-out;

  cursor: default;

  &:hover {
    opacity: 1;
  }

  @media ${maxdevice.desktopL} {
    font-size: 9.9rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 7.3rem;
  }
  @media ${maxdevice.laptopS} {
    font-size: 6rem;
    margin-left: 30rem;
  }
  @media ${maxdevice.laptop} {
    margin-left: 15rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 3.5rem;
    margin-left: 0;
    text-align: center;
  }
  @media ${maxdevice.mobileM} {
    font-size: 3rem;
  }
`;

const ContactSubtitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 400;

  color: #2c9487;

  margin-top: 7.25rem;

  @media ${maxdevice.desktopL} {
    font-size: 2.6rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 2.2rem;
  }
  @media ${maxdevice.laptopS} {
    font-size: 1.9rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const ContactFormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 6.5rem;

  @media ${maxdevice.tablet} {
    flex-direction: column;
  }
`;

const ContactForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailForm = styled.input`
  height: 3.125rem;
  width: 21.875rem;

  background: #14141c;
  border: 1px solid #ececec;

  color: #ececec;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;

  &::-webkit-input-placeholder {
    text-align: center;
  }

  @media ${maxdevice.laptopS} {
    width: 18.875rem;
  }
  @media ${maxdevice.tablet} {
    height: 2.5rem;
    width: 16rem;

    font-size: 1rem;
  }
  @media ${maxdevice.mobileM} {
    width: 13rem;
  }
`;

const NameForm = styled.input`
  height: 3.125rem;
  width: 21.875rem;

  background: #14141c;
  border: 1px solid #ececec;

  color: #ececec;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;

  margin-top: 2.5996875rem;

  &::-webkit-input-placeholder {
    text-align: center;
  }

  @media ${maxdevice.laptopS} {
    width: 18.875rem;
  }
  @media ${maxdevice.tablet} {
    height: 2.5rem;
    width: 16rem;

    font-size: 1rem;

    margin-top: 1.5rem;
  }
  @media ${maxdevice.mobileM} {
    width: 13rem;
  }
`;

const FormButton = styled.button`
  padding: 0.8625rem 5.625rem;

  border: none;
  border-radius: 2px;
  background-color: #2c9487;
  color: #ececec;

  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;

  margin-top: 2.5996875rem;
  margin-left: 7.68rem;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #22796f;
  }

  @media ${maxdevice.laptopS} {
    margin-left: 4.68rem;
  }
  @media ${maxdevice.tablet} {
    padding: 0.5625rem 6.9rem;

    font-size: 1rem;

    margin-top: 1.5rem;
    margin-left: 0rem;
  }
  @media ${maxdevice.mobileM} {
    padding: 0.5625rem 5.4rem;
  }
`;

const ContactFormArea = styled.textarea`
  position: relative;
  box-sizing: border-box;

  height: 14.6375rem;
  width: 28.75rem;
  background: #14141c;
  border: 1px solid #ececec;
  resize: none;

  color: #ececec;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;

  margin-left: 1.0625rem;

  @media ${maxdevice.laptopS} {
    width: 21.75rem;
  }
  @media ${maxdevice.tablet} {
    width: 16rem;

    margin-top: 1.5rem;
    margin-left: 0rem;
  }
  @media ${maxdevice.mobileM} {
    width: 13rem;
  }
`;
