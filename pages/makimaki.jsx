import Head from 'next/head';
import React from 'react';
import GlobalStyle from '../theme/globalStyles';
import GlobalContainer from '../theme/globalContainer';

import Navbar from '../components/Navbar';
import Makimaki from '../components/Makimaki';
import Footer from '../components/Footer';

function makimaki() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of web developer and web designer Ibrahim-Furkan Demirbilek, currently based in Berlin."
        ></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&family=Racing+Sans+One&family=Spartan:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <title>Ibrahim-Furkan Demirbilek | MakiMaki</title>
      </Head>
      <GlobalContainer>
        <GlobalStyle />
        <Navbar />
        <Makimaki />
        <Footer />
      </GlobalContainer>
    </>
  );
}

export default makimaki;
