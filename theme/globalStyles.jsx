import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::before, *::after {
    box-sizing: border-box;
    }
    
    body {

        padding: 0;
        margin: 0;
        color: #ececec;
        background: #14141c;
        font-family: 'Poppins', sans-serif;
        
        height: 100%;
      

     h1,h2,h3,h4,h5 {
         margin: 0;
     }

     h6 {
         font-weight: 600;
     }

    }

    a, a:visited, a:hover {
    text-decoration: none;
}

`;

export default GlobalStyle;
