import { A, Div, Img } from '@stylin.js/elements';
import { FC } from 'react';

const Social: FC = () => (
  <Div
    display="flex"
    gap={['1rem', '2rem']}
    justifyContent={['center', 'center', 'unset']}
  >
    <A href="https://telegram.com" target="_blank">
      <Img alt="Telegram" width="5rem" height="5rem" src="/img/telegram.webp" />
    </A>
    <A href="https://x.com" target="_blank">
      <Img alt="X" width="5rem" height="5rem" src="/img/x.webp" />
    </A>
    <A
      target="_blank"
      cursor="not-allowed"
      href="https://pump.fun"
      filter="grayScale(100%)"
    >
      <Img alt="Pump.fun" width="5rem" height="5rem" src="/img/pump-fun.webp" />
    </A>
    <A
      target="_blank"
      cursor="not-allowed"
      filter="grayScale(100%)"
      href="https://dex-screener.com"
    >
      <Img
        alt="Dex screener"
        width="5rem"
        height="5rem"
        src="/img/dex-screener.webp"
      />
    </A>
  </Div>
);

export default Social;
