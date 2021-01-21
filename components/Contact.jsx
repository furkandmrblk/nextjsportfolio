import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactWrapper id="contact">
      <ContactTitle>contact</ContactTitle>
      <ContactSubtitle>Interested? Contact Me!</ContactSubtitle>
      <ContactFormWrapper>
        <ContactForm>
          <EmailForm placeholder="e-mail" />
          <NameForm placeholder="name" />
          <FormButton>send</FormButton>
        </ContactForm>
        <ContactFormArea></ContactFormArea>
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

  &:hover {
    opacity: 1;
  }
`;

const ContactSubtitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 400;

  color: #2c9487;

  margin-top: 7.25rem;
`;

const ContactFormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 6.5rem;
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
`;

const FormButton = styled.button`
  padding: 0.8625rem 5.625rem;

  border: none;
  border-radius: 2px;
  background-color: #2c9487;
  color: #ececec;

  font-size: 1.25rem;
  font-weight: 500;

  margin-top: 2.5996875rem;
  margin-left: 7.68rem;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #22796f;
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
`;
