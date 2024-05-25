import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Chubby Rounded';
    src: url('/fonts/Chubby-Rounded.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chubby Rounded';
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  body {
    background-image: radial-gradient(
      at center center,
      #40bafa 24%,
      #abb5e9 74%
    );
    background-repeat: no-repeat;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
