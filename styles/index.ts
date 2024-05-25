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
  /* Frame 1321314640 */

  body {
    background-image: linear-gradient(
      180deg,
      #ffacd4 0%,
      #afbfde 33.5%,
      #8ac8e3 76.5%,
      #2a0919 100%
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
