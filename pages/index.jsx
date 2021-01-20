import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import GlobalStyle from '../theme/globalStyles';
import GlobalContainer from '../theme/globalContainer';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&family=Racing+Sans+One&family=Spartan:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>My Portfolio</title>
      </Head>
      <GlobalContainer>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </GlobalContainer>
    </>
  );
}
