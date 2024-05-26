import { A, Div, Img } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

const AnimatedA = motion(A);

const Social: FC = () => (
  <Div
    justifyItems="center"
    gap={['1rem', '2rem']}
    display={['grid', 'flex']}
    gridTemplateColumns="1fr 1fr"
    justifyContent={['center', 'center', 'unset']}
  >
    <AnimatedA
      href="https://telegram.com"
      target="_blank"
      whileHover={{ scale: 1.1 }}
    >
      <Img alt="Telegram" width="5rem" height="5rem" src="/img/telegram.webp" />
    </AnimatedA>
    <AnimatedA href="https://x.com" target="_blank" whileHover={{ scale: 1.1 }}>
      <Img alt="X" width="5rem" height="5rem" src="/img/x.webp" />
    </AnimatedA>
    <AnimatedA
      target="_blank"
      cursor="not-allowed"
      href="https://pump.fun"
      filter="grayScale(100%)"
    >
      <Img alt="Pump.fun" width="5rem" height="5rem" src="/img/pump-fun.webp" />
    </AnimatedA>
    <AnimatedA
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
    </AnimatedA>
  </Div>
);

export default Social;
