import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Chubby Rounded';
    src: url('/fonts/Chubby-Rounded.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fredoka';
    src: url('/fonts/fredoka-one.one-regular.ttf') format('truetype');
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
    background-repeat: no-repeat;
    background-image: linear-gradient(
      180deg,
      #95aef7 0%,
      #e3a7d6 18.5%,
      #feb5b9 36.5%,
      #93ee93 55.5%,
      #74d3c9 76.5%,
      #74c1ea 100%
    );
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
