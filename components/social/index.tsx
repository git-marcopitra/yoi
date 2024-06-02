import { A, Div, Img } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

const AnimatedA = motion(A);

const Social: FC<{ small?: boolean }> = ({ small }) => (
  <Div
    justifyItems="center"
    gap={['1rem', '2rem']}
    gridTemplateColumns="1fr 1fr"
    display={small ? 'flex' : ['grid', 'flex']}
    justifyContent={['center', 'center', 'unset']}
  >
    <AnimatedA
      target="_blank"
      href="https://t.me/yoiinu"
      whileHover={{ scale: 1.1 }}
    >
      <Img
        alt="Telegram"
        src="/img/telegram.webp"
        width={small ? '3rem' : '5rem'}
        height={small ? '3rem' : '5rem'}
      />
    </AnimatedA>
    <AnimatedA
      target="_blank"
      whileHover={{ scale: 1.1 }}
      href="https://x.com/yoi_world?s=21"
    >
      <Img
        alt="X"
        src="/img/x.webp"
        width={small ? '3rem' : '5rem'}
        height={small ? '3rem' : '5rem'}
      />
    </AnimatedA>
    <AnimatedA cursor="not-allowed" filter="grayScale(100%)">
      <Img
        alt="Pump.fun"
        src="/img/pump-fun.webp"
        width={small ? '3rem' : '5rem'}
        height={small ? '3rem' : '5rem'}
      />
    </AnimatedA>
    <AnimatedA cursor="not-allowed" filter="grayScale(100%)">
      <Img
        alt="Dex screener"
        src="/img/dex-screener.webp"
        width={small ? '3rem' : '5rem'}
        height={small ? '3rem' : '5rem'}
      />
    </AnimatedA>
  </Div>
);

export default Social;
